import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TopBar extends Component{
    render() {
        return (
            <View style={styles.topBar}>
                <Text style={styles.headline}>Tic-Tac-Toe</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    headline: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 0,
        width: 200,
      }
  });