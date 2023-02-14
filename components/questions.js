import { View, Text, FlatList, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

function Question({item}) {
    return (
        <View style={question_styles.main}>
            <Text style={question_styles.text}>{item.question}</Text>
        </View>
    )
}

function Find({filter,setFilter}) {
    return (
        <TextInput value={filter} style={styles.find} onChangeText={text => setFilter(text)}/>
    )
}

export default function Questions() {
    const [filter, setFilter] = useState("");
    const questions = require("../assets/questions.json");
    let filteredQuestions = questions;
    if (filter != "") {
        filteredQuestions = questions.filter(item => {
            return item.question.toLowerCase().includes(filter.toLowerCase());
        })
    }
    return (
        <View style={styles.main}>
            <Find filter={filter} setFilter={setFilter}/>
            <FlatList  data={filteredQuestions} renderItem={item => {
                return <Question item={item.item}/>
            }} keyExtractor={item => item.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        marginTop: 40,
        flexDirection: "column",
        alignItems:"center"
    },
    find: {
        backgroundColor: "#32373e",
        borderRadius: 15,
        height: 60,
        width: 350,
        padding: 20,
        color: "white",
        fontSize: 15,
        marginBottom: 20
    },
    text: {
        color: "white",
        fontFamily: 'Poppins-Medium',
    }
});

const question_styles = StyleSheet.create({
    main: {
        borderWidth: 2,
        padding: 10,
        borderColor: "#440381ff",
        marginVertical: 10,
        borderRadius: 15
    },
    text: {
        color: "white",
        flexWrap: "wrap",
        fontFamily: 'Poppins-Medium',
    }
})
