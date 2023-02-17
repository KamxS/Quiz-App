import { StyleSheet, View, Text, Pressable, Image, Dimensions } from "react-native";
import { useState, useContext, useEffect, useRef } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
    cancelAnimation,
    Easing
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

function Timer({widthValue}) {
    const sliderAnim = useAnimatedStyle(() => {
        return {
            transform: [{translateX: widthValue.value}]
        };
    });
    return <Animated.View style={[timerStyles.main, sliderAnim]}></Animated.View>;
}

let timerStyles = StyleSheet.create({
    main: {
        width: "100%",
        marginTop: 25,
        height: 5,
        backgroundColor: "white",
    },
});

export default function Game({ route, navigation }) {

    //TODO: Put a game into another component, add special multiplayer component that handles whole multiplayer
    
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
    const timeoutID = useRef(null);

    const fadeAnimTime = 500;
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

    const roundTime = 30000;
    const sliderWidth = useSharedValue(0);

    function press(answer) {
        if (interactive === false) return;
        clearTimeout(timeoutID.current);
        cancelAnimation(sliderWidth);
        sliderWidth.value = 0;

        setAnswers((current) => {
            nextRound(answer === questions[indx[questionNum]].goodAnswer);
            return current;
        });
    }

    function nextRound(wasCorrect) {
        setInteractive(false);

        setAnswers((current) => {
            wasCorrect
                ? (current[questionNum] = Answer.Right)
                : (current[questionNum] = Answer.Wrong);
            return current;
        });

        opacityAnim.value = withDelay(1500, withTiming(0, { duration: fadeAnimTime }));
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

            opacityAnim.value = withTiming(1, { duration: fadeAnimTime });
            setTimeout(() => {
                setInteractive(true);
            }, fadeAnimTime);
        }, 2200);
    }

    useEffect(() => {
        sliderWidth.value = withDelay(fadeAnimTime,withTiming(-Dimensions.get("screen").width,{duration: roundTime, easing: Easing.linear}));
        timeoutID.current = setTimeout(() => {
            nextRound(false);
        }, roundTime + fadeAnimTime);
    },["",questionNum]);

    return (
        <View style={styles.main}>
            <Timer widthValue={sliderWidth}/>
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
        flex: 1,
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
