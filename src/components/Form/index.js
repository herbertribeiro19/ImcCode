import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import ResultImc from "../ResultImc/";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState()
    const [textButton, setTextButton] = useState("Calcular")
    const [tipoClassificacao, setTipoClassificacao] = useState(null)

    function imcCalculator() {
        const calculatedImc = (weight / (height * height)).toFixed(2);
        setImc(calculatedImc);

        if (calculatedImc < 18.5) {
            setTipoClassificacao("Abaixo do peso");
        } else if (calculatedImc >= 18.5 && calculatedImc < 24.9) {
            setTipoClassificacao("Peso normal");
        } else if (calculatedImc >= 25 && calculatedImc < 29.9) {
            setTipoClassificacao("Sobrepeso");
        } else if (calculatedImc >= 30 && calculatedImc < 34.9) {
            setTipoClassificacao("Obesidade grau 1");
        } else if (calculatedImc >= 35 && calculatedImc < 39.9) {
            setTipoClassificacao("Obesidade grau 2");
        } else {
            setTipoClassificacao("Obesidade grau 3");
        }
    }

    function verificationImc() {
        if (weight !== null && height !== null) {
            imcCalculator();
            setMessageImc("Seu IMC é igual a:");
            setTextButton("Calcular Novamente");
        } else {
            setImc(null);
            setTipoClassificacao(null);
            setMessageImc("Preencha o peso e altura");
            setTextButton("Calcular");
        }
        // Limpando os campos de entrada após o cálculo
        setHeight(null);
        setWeight(null);
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
            <ResultImc messageResultImc={messageImc} ResultImc={imc} classificacao={tipoClassificacao} />
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