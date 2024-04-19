import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Title() {
    return (
        <View>
            <Text style={styles.containerText}>Cálculo de IMC</Text>
            <Image style={{ width: 140, height: 140, alignSelf: "center", marginTop: 20, }} source={require('../../img/Calculator-cuate.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerText: {
        marginTop: 66,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ffebcd",
    },
});