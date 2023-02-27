import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { StyleSheet } from "react-native";

export function Timer({ widthValue }) {
    const sliderAnim = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: widthValue.value }],
        };
    });
    return (
        <Animated.View style={[timerStyles.main, sliderAnim]}></Animated.View>
    );
}

export let timerStyles = StyleSheet.create({
    main: {
        width: "100%",
        marginTop: 25,
        height: 5,
        backgroundColor: "white",
    },
});
