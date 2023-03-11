import { StyleSheet, View, Text } from "react-native";

function determineAnswer(answer) {
    let color = "white";
    let symbol = "◯";
    if (answer !== null) {
        symbol = "⬤";
        if (answer === true) {
            color = "#440381ff";
        }
    }
    return { symbol, color };
}

export default function MultiplayerQuestionCounter({ answers, enemyAnswers }) {
    return (
        <View style={questionCounterStyles.main}>
            {answers && (
                <View style={questionCounterStyles.left}>
                    {answers.map((answer, ind) => {
                        const { symbol, color } = determineAnswer(answer);
                        return (
                            <Text
                                key={ind}
                                style={[
                                    questionCounterStyles.text,
                                    { color: color },
                                ]}
                            >
                                {symbol}
                            </Text>
                        );
                    })}
                </View>
            )}
            <View style={questionCounterStyles.buffer} />
            {enemyAnswers && (
                <View style={questionCounterStyles.right}>
                    {enemyAnswers.map((answer, ind) => {
                        const { symbol, color } = determineAnswer(answer);
                        return (
                            <Text
                                key={ind}
                                style={[
                                    questionCounterStyles.text,
                                    { color: color },
                                ]}
                            >
                                {symbol}
                            </Text>
                        );
                    })}
                </View>
            )}
        </View>
    );
}
let questionCounterStyles = StyleSheet.create({
    main: {
        flexDirection: "row",
        marginTop: 10,
        width: "100%",
    },
    text: {
        color: "white",
        marginHorizontal: 5,
        fontSize: 16,
    },
    left: {
        flexDirection: "row",
    },
    buffer: {
        flex: 1,
    },
    right: {
        flexDirection: "row",
    },
});
