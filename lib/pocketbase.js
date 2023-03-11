import PocketBase from "pocketbase";
import eventsource from "react-native-sse";
global.EventSource = eventsource;

//const pb = new PocketBase("http://127.0.0.1:8090");
const pb = new PocketBase("https://infquiz-backend.fly.dev/");

export function getId() {
    if (pb.authStore.isValid) {
        return pb.authStore.model.id;
    } else return '';
}

export async function login(credentials) {
    const user = await pb
        .collection("users")
        .authWithPassword(credentials.email, credentials.password);
    return user;
}

export function logout() {
    pb.authStore.clear();
}

export async function getGames() {
    const games = await pb.collection("games").getFullList();
    return games;
}

export async function joinGameQueue(onUpdate) {
    pb.collection('games').subscribe('*', () => {
        onUpdate();
    });
}

export function leaveGameQueue() {
    pb.collection('games').unsubscribe('*');
}

export async function createGame(indexes) {
    if (!pb.authStore.isValid) {
        throw new Error("Not logged in");
    }

    const id = pb.authStore.model.id;
    const data = {
        questions: indexes,
        answers: {},
        users: [],
    };

    const games = await pb.collection("games").create(data);
    return games;
}

export async function joinGame(gameId, onUpdate){
    if (!pb.authStore.isValid) {
        throw new Error("Not logged in");
    }

    const game = await pb.collection('games').getOne(gameId);
    if(game.users.length > 1) throw new Error("Game is full");

    const id = pb.authStore.model.id;
    game.answers[id] = [null, null, null, null, null];
    const data = {
        answers: game.answers,
        users: [...game.users, id],
    };

    const updatedGame = await pb.collection("games").update(gameId, data);

    pb.collection('games').subscribe(updatedGame.id, gamedata => {
        if(gamedata.action === "update") onUpdate(gamedata.record);
    });
    return updatedGame;
}

export async function leaveGame(gameId) {
    pb.collection('games').unsubscribe(gameId);
    const game = await pb.collection('games').getOne(gameId);

    //TODO: Game's not getting deleted
    if(game.users < 2) {
        await pb.collection('games').delete(gameId);
        return;
    }

    pb.collection('games').update(gameId, {
        users: [...game.users.filter(id => {
            return id!==pb.authStore.model.id
        })]
    })
}

export async function getGame(gameId) {
    if(!gameId) throw new Error("No game id was provided");
    const game = await pb.collection('games').getOne(gameId);
    return game;
}

export async function answer(gameId, wasCorrect, questionNum) {
    const id = getId();
    const game = await getGame(gameId);
    
    game.answers[id][questionNum] = wasCorrect;
    
    await pb.collection('games').update(gameId, {
        answers: game.answers
    })
}