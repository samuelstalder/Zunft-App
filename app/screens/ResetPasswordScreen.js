import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";
import textStyle from "../config/styles";

function ResetPasswordScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={textStyle.titleText}>Reset Password Screen</Text>
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

export default ResetPasswordScreen;