import { useState, useEffect,useContext } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { GlobalCtx } from "../context";
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function PlayTab({navigation})  {
    const numOfQuestions = useContext(GlobalCtx).questionsNum;

    function startGame(toGenerate) {
        //TODO: There's a chance that one question may be choosen twice
        let randomInd= [];
        for(let i=0;i<toGenerate;i++) {
            let randomIndex = Math.floor(Math.random() * numOfQuestions);
            randomInd.push(randomIndex);
        }
        navigation.push('Game',{indx: randomInd});
    }

    return (
        <View style={styles.container}>
            <View style={styles.rowBig}>
                <Pressable style={styles.playBtnVertical} onPress={() => startGame(5)}>
                    <Ionicons style="playIcon" name="game-controller" size={100} color="white" />
                    <Text style={styles.playText}>Play 5</Text>
                </Pressable>
                <Pressable style={styles.playBtnVertical}>
                <Ionicons style="playIcon" name="game-controller" size={100} color="white" />
                    <Text style={styles.playText}>Play 20</Text>
                </Pressable>
            </View>
            <View style={styles.row}>
                <View style={styles.playBtnHorizontal}>
                    <MaterialCommunityIcons name="sword-cross" size={60} color="white" />
                    <Text style={styles.playText}>Versus Mode</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.playBtnHorizontal}></View>
            </View>
            {/* <Button onPress={() => startGame(5)} title="Start"/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1d1e24",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10
    },
    rowBig: {
        flex: 2,
        width: "100%",
        margin: 10,
        flexDirection: "row",
    },
    row: {
        flex: 1,
        width: "100%",
        margin: 8,
    },
    playBtnVertical: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        backgroundColor: "#2A2E35",
        borderRadius: 15,
    },
    playBtnHorizontal: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2A2E35",
        borderRadius: 15,
        marginHorizontal: 5
    },
    playIcon: {
    },
    playText: {
        color: "white",
        fontSize: 24
    }
});
