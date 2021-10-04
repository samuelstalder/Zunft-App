import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";
import {Button} from 'react-native-elements';
import textStyle from "../config/styles";

function CalendarScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={textStyle.titleText}>Calendar Screen</Text>
                <Button
                    title="Anlass"
                    onPress={() => navigation.navigate("Anlass")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.riesbach
    },
    textContainer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
    }
})

export default CalendarScreen;