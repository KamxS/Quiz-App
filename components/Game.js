import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
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
import { QuestionCounter } from "./Game/QuestionCounter";

const Answer = {
    None: "None",
    Right: "Right",
    Wrong: "Wrong",
};

export default function Game({ route, navigation }) {
    const [interactive, setInteractive] = useState(true);
    const [noTime,setNoTime] = useState(false);
    const { indx, online } = route.params;

    const questions = useContext(GlobalCtx).questions;
    const [questionNum, setQuestionNum] = useState(0);
    const [answers, setAnswers] = useState([
        Answer.None,
        Answer.None,
        Answer.None,
        Answer.None,
        Answer.None,
    ]);

    const timeoutID = useRef(null);

    const roundTime = 30000;
    const betweenRoundsTime = 2200;
    const fadeAnimTime = 500;
    const sliderWidth = useSharedValue(0);

    function endGame() {
        navigation.pop();
    }

    function nextRound(wasCorrect) {
        if(noTime) setNoTime(false);
        setInteractive(false);

        clearTimeout(timeoutID.current);
        cancelAnimation(sliderWidth);
        sliderWidth.value = 0;

        setAnswers((current) => {
            wasCorrect
                ? (current[questionNum] = Answer.Right)
                : (current[questionNum] = Answer.Wrong);
            return current;
        });

        setTimeout(() => {
            setQuestionNum((current) => {
                if (current < indx.length - 1) {
                    return (current+=1);
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
    }, ["", questionNum]);

    return (
        <View style={styles.main}>
            <Timer widthValue={sliderWidth} />
            <View style={styles.container}>
                <QuestionCounter answers={answers} />
                <Question
                    question={questions[indx[questionNum]]}
                    interactive = {interactive}
                    fadeAnimTime={fadeAnimTime}
                    nextRound={nextRound}
                    noTime={noTime}
                />
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
});
