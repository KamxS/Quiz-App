import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { GlobalCtx } from "../context";
//import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getId, getGames, createGame } from "../../lib/pocketbase";
import { useQuery, useQueryClient, useMutation } from "react-query";

export default function PlayTab({ navigation }) {
    const queryClient = useQueryClient();
    const numOfQuestions = useContext(GlobalCtx).questionsNum;
    const games = useQuery({
        queryKey: ["games"],
        queryFn: getGames,
    });
    const createGameMut = useMutation({
        mutationFn: (indexes) => {
            return createGame(indexes);
        },
        onSuccess: (data) => {
            navigation.push("MultiplayerGame", {
                gameId: data.id,
            })
        }
    });

    function startGame(toGenerate, isOnline) {
        if (isOnline) {
            if (!getId()) return;
            queryClient.invalidateQueries({ queryKey: ["games"] });
            if (games.data.length > 0) {
                const available_games = games.data.map((game) => {
                    if (game.users.length < 2) {
                        return game;
                    }
                });
                if (available_games.length > 0) {
                    const id = available_games[0].id;
                    navigation.push("MultiplayerGame", {
                        gameId: id,
                    });
                    return;
                }
            }
        }

        //TODO: There's a chance that one question may be choosen twice
        let randomInd = [];
        for (let i = 0; i < toGenerate; i++) {
            let randomIndex = Math.floor(Math.random() * numOfQuestions);
            randomInd.push(randomIndex);
        }

        isOnline
            ? createGameMut.mutate(randomInd)
            : navigation.push("Game", {
                  indx: randomInd,
              });
    }

    useEffect(() => {
        setInterval(() => {
            console.log('l');
            queryClient.invalidateQueries({ queryKey: ["games"] });
        },5000);
    },[]);

    //   <Ionicons style="playIcon" name="game-controller" size={100} color="white" />
    //<Ionicons style="playIcon" name="game-controller" size={100} color="white" />
    return (
        <View style={styles.container}>
            <View style={styles.rowBig}>
                <Pressable
                    style={styles.playBtnVertical}
                    onPress={() => startGame(5, false)}
                >
                    <Text>Ionicons game-controlle</Text>
                    <Text style={styles.playText}>Play 5</Text>
                </Pressable>
                <Pressable style={styles.playBtnVertical}>
                    <Text>Ionicons game-controller</Text>
                    <Text style={styles.playText}>Play 20</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <Pressable
                    style={styles.playBtnHorizontal}
                    onPress={() => startGame(5, true)}
                >
                    <MaterialCommunityIcons
                        name="sword-cross"
                        size={60}
                        color="white"
                    />
                    <Text style={styles.playText}>Versus Mode</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <View style={styles.playBtnHorizontal}></View>
            </View>
            {/* <Button onPress={() => startGame(5)} title="Start"/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d1e24",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    rowBig: {
        flex: 2,
        width: "100%",
        margin: 10,
        flexDirection: "row",
    },
    row: {
        flex: 1,
        width: "100%",
        margin: 8,
    },
    playBtnVertical: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        backgroundColor: "#2A2E35",
        borderRadius: 15,
    },
    playBtnHorizontal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A2E35",
        borderRadius: 15,
        marginHorizontal: 5,
    },
    playIcon: {},
    playText: {
        color: "white",
        fontSize: 24,
    },
});
