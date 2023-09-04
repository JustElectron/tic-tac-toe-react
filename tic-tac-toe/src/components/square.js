import React, {Component, useState} from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";


const Square = (props) => {
    return (
        <View style={styles.square}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.mark}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
      width: "30%",
      height: "90%",
      margin: 3,
      marginHorizontal: 3,
      backgroundColor: '#fff',
    },
    button: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
    }
  });

export default Square;