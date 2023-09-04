import React, {Component, useState} from "react";
import { View, StyleSheet } from "react-native";
import Square from "./square";


const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setisXNext] = useState(true);

    function clickHandler(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[i] = isXNext ? "X" : "O";
        setSquares(newSquares);
        setisXNext(!isXNext)
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Square mark={squares[0]} onPress={() => clickHandler(0)}/>
                    <Square mark={squares[1]} onPress={() => clickHandler(1)}/>
                    <Square mark={squares[2]} onPress={() => clickHandler(2)}/>
                </View>
                <View style={styles.row}>
                    <Square mark={squares[3]} onPress={() => clickHandler(3)}/>
                    <Square mark={squares[4]} onPress={() => clickHandler(4)}/>
                    <Square mark={squares[5]} onPress={() => clickHandler(5)}/>
                </View>
                <View style={styles.row}>
                    <Square mark={squares[6]} onPress={() => clickHandler(6)}/>
                    <Square mark={squares[7]} onPress={() => clickHandler(7)}/>
                    <Square mark={squares[8]} onPress={() => clickHandler(8)}/>
                </View>
            </View>
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AAA",
        flex: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        height: "30%",
        width:"90%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    }
  });

export default Board;