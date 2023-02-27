import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useEffect } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
    withSequence,
} from "react-native-reanimated";

export default function Question({
    question,
    interactive,
    fadeAnimTime,
    nextRound,
    noTime
}) {
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
        if (!interactive) return;
        nextQuestion();
        nextRound(answer === question.goodAnswer);
    }

    function nextQuestion() {
        goodAnswerColorAnim.value = withTiming("#440381", { duration: 1000 });
        opacityAnim.value = withSequence(
            withDelay(
                1500,
                withTiming(0, { duration: fadeAnimTime }),
            ),
            withDelay(700, withTiming(1, { duration: fadeAnimTime }))
        );
        setTimeout(() => {
            goodAnswerColorAnim.value = "#2A2E35";
        }, 2000);
    }

    useEffect(() => {
        if(noTime) nextQuestion();
    },[noTime]);

    return (
        <View style={styles.main}>
            {question.imageLoc !== "" && (
                <Animated.View style={[styles.imageContainer, fadeOutAnim]}>
                    <Image style={styles.image} source={question.imageLoc} />
                </Animated.View>
            )}
            <Animated.View style={[styles.question, fadeOutAnim]}>
                <Text style={styles.textQuestion}>{question.question}</Text>
            </Animated.View>
            {question.answers.map((answer, ind) => {
                return (
                    <Animated.View
                        key={ind}
                        style={[
                            styles.answer,
                            fadeOutAnim,
                            answer === question.goodAnswer
                                ? goodAnswerAnim
                                : {},
                        ]}
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
    );
}

let styles = StyleSheet.create({
    main: {
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
