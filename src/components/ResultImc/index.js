import React from "react"
import { StyleSheet, View, Text } from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text style={styles.textResultado}>{props.messageResultImc}</Text>
            <Text style={styles.textResultado2}>{props.ResultImc}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    textResultado: {
        margin: 6,
        fontSize: 18,
        color: "#191970",
        fontWeight: "500",
        justifyContent: "center",
        textAlign: "center",
    },

    textResultado2: {
        marginBottom: 14,
        fontSize: 42,
        color: "#191970",
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },
});