import { StyleSheet, View, Dimensions, Text, Modal} from "react-native";
import { useState, useContext, useEffect, useRef } from "react";
import {
    useSharedValue,
    withTiming,
    withDelay,
    cancelAnimation,
    Easing,
} from "react-native-reanimated";
import Question from "./Game/Question";
import { GlobalCtx } from "./context";
import { Timer } from "./Game/Timer";
import MultiplayerQuestionCounter from "./Game/MultiplayerQuestionCounter";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { joinGame, leaveGame, getGame, getId, answer } from "../lib/pocketbase";

export default function MultiplayerGame({ route, navigation }) {
    const [started, setStarted] = useState(false);
    const [winner, setWinner] = useState('');
    const [interactive, setInteractive] = useState(true);
    const [noTime, setNoTime] = useState(false);
    const { gameId } = route.params;

    const questions = useContext(GlobalCtx).questions;
    const [questionNum, setQuestionNum] = useState(0);

    const timeoutID = useRef(null);

    const roundTime = 30000;
    const betweenRoundsTime = 2200;
    const fadeAnimTime = 500;
    const sliderWidth = useSharedValue(0);

    const id = useRef("");
    const enemyId = useRef("");
    const queryClient = useQueryClient();
    const game = useQuery({
        queryKey: ["game", gameId],
        queryFn: async () => {
            const game = await getGame(gameId);
            if (game.users.length > 1 && !started) {
                id.current = getId();
                enemyId.current = game.users.filter((userId) => {
                    return id.current !== userId;
                })[0];
                setStarted(true);
            }
            return game;
        },
    });
    const answerMut = useMutation({
        mutationFn: (wasCorrect) => answer(gameId, wasCorrect, questionNum),
    });

    function endGame() {
        //TODO: We should wait till the other player is done before counting
        let numOfGood = 0; 
        let numOfGoodEnemy = 0;
        game.data.answers[id.current].forEach(answer => {
            if(answer) ++numOfGood;
        });
        
        game.data.answers[enemyId.current].forEach(answer => {
            if(answer) ++numOfGoodEnemy;
        });

        //TODO: Remis???
        setWinner(numOfGood > numOfGoodEnemy ? id.current : enemyId.current);
        setTimeout(() => {
            navigation.pop();
        },2000);
    }

    function nextRound(wasCorrect) {
        if (noTime) setNoTime(false);
        setInteractive(false);

        clearTimeout(timeoutID.current);
        cancelAnimation(sliderWidth);
        sliderWidth.value = 0;

        answerMut.mutate(wasCorrect);

        setTimeout(() => {
            setQuestionNum((current) => {
                if (current < game.data.questions.length - 1) {
                    return (current += 1);
                } else {
                    endGame();
                    return current;
                }
            });

            setTimeout(() => {
                setInteractive(true);
            }, fadeAnimTime);
        }, betweenRoundsTime);
    }

    useEffect(() => {
        joinGame(gameId, (data) => {
            queryClient.invalidateQueries({ queryKey: ["game"] });
        });
        return () => {
            leaveGame(gameId);
        };
    }, []);

    useEffect(() => {
        if (!started) return;
        sliderWidth.value = withDelay(
            fadeAnimTime,
            withTiming(-Dimensions.get("screen").width, {
                duration: roundTime,
                easing: Easing.linear,
            })
        );
        timeoutID.current = setTimeout(() => {
            setNoTime(true);
            nextRound(false);
        }, roundTime + fadeAnimTime);
    }, [started, questionNum]);

    if (game.isError) return <Text>{game.error}</Text>;
    if (game.isLoading) return <Text>Loading</Text>;
    if (!started) return <Text>Waiting for other players</Text>;

    return (
        <View style={styles.main}>
            <Timer widthValue={sliderWidth} />
            <View style={styles.container}>
                <MultiplayerQuestionCounter
                    answers={game.data.answers[id.current]}
                    enemyAnswers={game.data.answers[enemyId.current]}
                />
                <Question
                    question={questions[game.data.questions[questionNum]]}
                    interactive={interactive}
                    fadeAnimTime={fadeAnimTime}
                    nextRound={nextRound}
                    noTime={noTime}
                />
            </View>
            <Modal
                visible={winner !== ''}
                transparent={true}
                animationType={"slide"}
            >
                <View style={modalStyles.modalBox}>
                    <View style={modalStyles.modalContent}>
                        <Text style={modalStyles.modalText}>{winner===id.current ? 'Wygranko' : 'Przegranko'}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

let styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#1d1e24",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    endGameModal: {
        flex: 1
    }
});

const modalStyles = StyleSheet.create({
    modalBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalContent: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});