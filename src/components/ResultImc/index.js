import React from "react"
import { StyleSheet, View, Text } from 'react-native';

export default function ResultImc(props) {
    return (
        <View>
            <Text style={styles.textResultado}>{props.messageResultImc}</Text>
            <Text style={styles.textResultado2}>{props.ResultImc}</Text>
            <Text style={styles.textResultado3}>{props.classificacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    textResultado: {
        marginBottom: 2,
        fontSize: 18,
        color: "#191970",
        fontWeight: "500",
        justifyContent: "center",
        textAlign: "center",
    },

    textResultado2: {
        marginBottom: 2,
        fontSize: 42,
        color: "#191970",
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },

    textResultado3: {
        marginBottom: 0,
        fontSize: 16,
        color: "#333",
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },
});