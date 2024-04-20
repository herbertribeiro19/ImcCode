import React from "react"
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View, TouchableOpacity, Text, Share } from 'react-native';


export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Olá, meu IMC hoje é " + props.ResultImc + " e a classificação está como " + props.classificacao,
        })
    }


    return (
        <View>

            <Text style={styles.textResultado}>{props.messageResultImc}</Text>
            <Text style={styles.textResultado2}>{props.ResultImc}</Text>
            <Text style={styles.textResultado3}>{props.classificacao}</Text>

            <View>
                <TouchableOpacity onPress={onShare}>
                    <Feather style={styles.btnShare} name="share" size={24} color="#191970" />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    textResultado: {
        marginTop: 40,
        marginBottom: 2,
        fontSize: 18,
        color: "#191970",
        fontWeight: "500",
        justifyContent: "center",
        textAlign: "center",
    },

    textResultado2: {
        marginBottom: 2,
        fontSize: 60,
        color: "#191970",
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },

    textResultado3: {
        marginBottom: 0,
        fontSize: 18,
        color: "#333",
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },

    btnShare: {
        alignSelf: "center",
        margin: 10,
    },
});