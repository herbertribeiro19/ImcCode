import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import ResultImc from "../ResultImc/";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function verificationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return (
        <View style={styles.boxForm}>
            <View style={styles.form}>
                <Text style={styles.textHeight}>Altura</Text>
                <TextInput style={styles.inputHeight} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
                <Text style={styles.textWeight}>Peso</Text>
                <TextInput style={styles.inputWeight} onChangeText={setWeight} value={weight} placeholder="Ex. 65.25" keyboardType="numeric"></TextInput>
                <View style={styles.btnCalculo} >
                    <Button color="#ffebcd" onPress={() => verificationImc()} title={textButton} />
                </View>

            </View>

            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        </View>
    );
}

const styles = StyleSheet.create({
    boxForm: {
        backgroundColor: "#ffebcd",
        width: 360,
        height: 400,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 12,
    },

    textHeight: {
        marginTop: 14,
        fontSize: 24,
        color: "#191970",
        fontWeight: "bold",
        marginBottom: 12,
    },

    inputHeight: {
        fontSize: 18,
        color: "#191910",
        fontWeight: "bold",
        marginBottom: 20,
    },

    textWeight: {
        fontSize: 24,
        color: "#191970",
        fontWeight: "bold",
        marginBottom: 12,
    },

    inputWeight: {
        fontSize: 18,
        color: "#191910",
        fontWeight: "bold",
        marginBottom: 20,
    },

    btnCalculo: {
        backgroundColor: "#191970",
        padding: 10,
        borderRadius: 20,
        color: "black",
        fontWeight: "bold",
        margin: 10,
        textDecorationColor: "black",
    },




});