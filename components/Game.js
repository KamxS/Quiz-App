import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState, useContext } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
} from "react-native-reanimated";
import { GlobalCtx } from "./context";

const Answer = {
    None: "None",
    Right: "Right",
    Wrong: "Wrong",
};

function QuestionCounter({ answers }) {
    return (
        <View style={questionCounterStyles.main}>
            {answers.map((answer, ind) => {
                let color = "white";
                let symbol = "◯";
                if (answer != Answer.None) {
                    symbol = "⬤";
                    if (answer == Answer.Right) {
                        color = "#440381ff";
                    }
                }
                return (
                    <Text
                        key={ind}
                        style={[questionCounterStyles.text, { color: color }]}
                    >
                        {symbol}
                    </Text>
                );
            })}
        </View>
    );
}

let questionCounterStyles = StyleSheet.create({
    main: {
        flexDirection: "row",
        marginTop: 10,
    },
    text: {
        color: "white",
        marginHorizontal: 5,
        fontSize: 18,
    },
});

export default function Game({ route, navigation }) {
    const questions = useContext(GlobalCtx).questions;
    const { indx } = route.params;

    const [questionNum, setQuestionNum] = useState(0);
    const [answers, setAnswers] = useState([
        Answer.None,
        Answer.None,
        Answer.None,
        Answer.None,
        Answer.None,
    ]);

    const [interactive, setInteractive] = useState(true);

    const opacityAnim = useSharedValue(1);
    const fadeOutAnim = useAnimatedStyle(() => {
        return {
            opacity: opacityAnim.value,
        };
    });
    const goodAnswerColorAnim = useSharedValue("#2A2E35");
    const goodAnswerAnim = useAnimatedStyle(() => {
        return {
            backgroundColor: goodAnswerColorAnim.value,
        };
    });

    function press(answer) {
        if (interactive === false) return;
        setInteractive(false);

        setAnswers((current) => {
            answer === questions[indx[questionNum]].goodAnswer
                ? (current[questionNum] = Answer.Right)
                : (current[questionNum] = Answer.Wrong);
            return current;
        });

        opacityAnim.value = withDelay(1500, withTiming(0, { duration: 500 }));
        goodAnswerColorAnim.value = withTiming("#440381", { duration: 1000 });
        setTimeout(() => {
            goodAnswerColorAnim.value = "#2A2E35";
            setQuestionNum((current) => {
                if (current < indx.length - 1) {
                    return (current += 1);
                } else {
                    navigation.goBack();
                }
            });

            setTimeout(() => {
                opacityAnim.value = withTiming(1, { duration: 500 });
                setInteractive(true);
            }, 500);
        }, 2200);
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <QuestionCounter answers={answers} />
                {questions[indx[questionNum]].imageLoc !== "" && (
                    <Animated.View style={[styles.imageContainer, fadeOutAnim]}>
                        <Image
                            style={styles.image}
                            source={questions[indx[questionNum]].imageLoc}
                        />
                    </Animated.View>
                )}
                <Animated.View style={[styles.question, fadeOutAnim]}>
                    <Text style={styles.textQuestion}>
                        {questions[indx[questionNum]].question}
                    </Text>
                </Animated.View>
                {questions[indx[questionNum]].answers.map((answer, ind) => {
                    let additionalAnim;
                    answer === questions[indx[questionNum]].goodAnswer
                        ? (additionalAnim = goodAnswerAnim)
                        : (additionalAnim = null);
                    return (
                        <Animated.View
                            key={ind}
                            style={[styles.answer, fadeOutAnim, additionalAnim]}
                        >
                            <Pressable
                                onPress={() => press(answer)}
                                style={{ width: "100%", height: "auto" }}
                            >
                                <Text style={styles.answerText}>{answer}</Text>
                            </Pressable>
                        </Animated.View>
                    );
                })}
            </View>
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
        height: "100%",
        alignItems: "center",
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        maxHeight: "20%",
        width: "100%",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 5,
    },
    image: {
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        borderColor: "black",
    },
    question: {
        backgroundColor: "#2A2E35",
        width: "100%",
        height: "auto",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 30,
    },
    textQuestion: {
        color: "white",
        width: "90%",
        height: "auto",
        marginVertical: 20,
        fontSize: 16,
    },
    answer: {
        backgroundColor: "#2A2E35",
        width: "90%",
        height: "auto",
        alignItems: "center",
        borderColor: "white",
        borderRadius: 5,
        marginVertical: 5,
    },
    answerText: {
        color: "white",
        width: "90%",
        height: "auto",
        marginVertical: 10,
        marginHorizontal: 8,
        fontSize: 14,
    },
});
