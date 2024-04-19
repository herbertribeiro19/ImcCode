import React, { useState } from "react"
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import ResultImc from "../ResultImc/";

export default function Form() {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState(null)
    const [imc, setImc] = useState()
    const [textButton, setTextButton] = useState("Calcular")
    const [tipoClassificacao, setTipoClassificacao] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        const calculatedImc = (weight / (heightFormat * heightFormat)).toFixed(2);
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
            Keyboard.dismiss();
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
        <Pressable onPress={Keyboard.dismiss} style={styles.boxForm}>
            <View style={styles.form}>
                <Text style={styles.textHeight}>Altura</Text>
                <TextInput style={styles.inputHeight} onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric"></TextInput>
                <Text style={styles.textWeight}>Peso</Text>
                <TextInput style={styles.inputWeight} onChangeText={setWeight} value={weight} placeholder="Ex. 65.25" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.btnCalculo} onPress={() => { verificationImc() }}>
                    <Text style={styles.btnText} >{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} classificacao={tipoClassificacao} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boxForm: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffebcd",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,
        shadowColor: "black",
        shadowOpacity: 0.6,
        shadowRadius: 10,
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 20,
    },

    textHeight: {
        fontSize: 22,
        color: "#191970",
        fontWeight: "bold",
        marginBottom: 12,
    },

    inputHeight: {
        fontSize: 18,
        color: "#191910",
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor: "#ffeb",
        padding: 14,
        borderRadius: 30,
    },

    textWeight: {
        fontSize: 22,
        color: "#191970",
        fontWeight: "bold",
        marginBottom: 12,
    },

    inputWeight: {
        fontSize: 18,
        color: "#191910",
        fontWeight: "bold",
        marginBottom: 10,
        backgroundColor: "#ffeb",
        padding: 14,
        borderRadius: 30,
    },

    btnCalculo: {
        backgroundColor: "#191970",
        padding: 8,
        borderRadius: 30,
        color: "black",
        fontWeight: "bold",
        marginRight: 10,
        marginLeft: 10,
        marginTop: 4,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    btnText: {
        fontSize: 18,
        color: "#ffebcd",
        fontWeight: "bold",
        margin: 10,
    },

});