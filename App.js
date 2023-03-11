import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./components/Menu";
import Game from "./components/Game";
import { GlobalCtx } from "./components/context";
import Questions from "./assets/questions";
import { QueryClient, QueryClientProvider } from "react-query";
import MultiplayerGame from "./components/MultiplayerGame";
// import * as SplashScreen from 'expo-splash-screen';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
export default function App() {
    const [fontsLoaded] = useFonts({
        "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
        "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    });

    const globalState = {
        questions: Questions,
        questionsNum: Questions.length,
        pallete: {},
    };

    // useEffect(() => {
    //     async function prepare() {
    //         await SplashScreen.preventAutoHideAsync();
    //     }
    //     prepare();
    // }, []);

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <GlobalCtx.Provider value={globalState}>
                    <Stack.Navigator
                        initialRouteName="Menu"
                        screenOptions={{ headerShown: false }}
                    >
                        <Stack.Screen name="Menu" component={Menu} />
                        <Stack.Screen name="Game" component={Game} />
                        <Stack.Screen name="MultiplayerGame" component={MultiplayerGame} />
                    </Stack.Navigator>
                </GlobalCtx.Provider>
            </QueryClientProvider>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

// Palette:
// background: #1d1e24
// background_light: #632373
// primary: #440381
// secondary: #b49fcc
// text: #ffffff
