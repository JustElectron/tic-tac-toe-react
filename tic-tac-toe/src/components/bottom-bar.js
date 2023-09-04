import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const BottomBar = (props) => {
    return (
        <View style={styles.bottomBar}>
            <View style={styles.box}>
                <Text>Menu Placeholder</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    box: {
        width: "70%",
        height: "100%",
        justifyContent: "center",
    },
    button: {
        width: "30%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
    }
  });

export default BottomBar;