import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Title() {
    return (
        <View>
            <Text style={styles.containerText}>Calculadora de IMC</Text>
            <Image style={{ width: 100, height: 100, alignSelf: "center", marginTop: 20, }} source={require('../../img/Calculator-cuate.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerText: {
        marginTop: 55,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ffebcd",
    },
});