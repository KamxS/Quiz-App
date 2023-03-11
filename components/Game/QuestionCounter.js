import {
    StyleSheet,
    View,
    Text
} from "react-native";

const Answer = {
    None: "None",
    Right: "Right",
    Wrong: "Wrong",
};

export default function QuestionCounter({ answers }) {
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
