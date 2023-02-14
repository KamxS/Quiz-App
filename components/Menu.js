import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsTab from "./Menu/SettingsTab";
import CustomizeTab from "./Menu/CustomizeTab"
import PlayTab from "./Menu/PlayTab";

import { useState, useEffect,useContext } from "react";

const Tab = createBottomTabNavigator();
export default function Menu({navigation}) {
    return (
    <Tab.Navigator initialRouteName="Play"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Play") {
                        iconName = focused
                            ? "play-circle"
                            : "play-circle-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused
                            ? "settings"
                            : "settings-outline";
                    } else if (route.name === "Customize") {
                        iconName = "ios-pencil";
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
                headerStyle: {backgroundColor: "#440381"},
                headerTintColor: '#fff',
                tabBarStyle: {backgroundColor: "#440381"},
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
            })}
        >
            <Tab.Screen name="Customize" component={CustomizeTab} />
            <Tab.Screen name="Play" component={PlayTab} />
            <Tab.Screen name="Settings" component={SettingsTab} />
        </Tab.Navigator>
    );
}