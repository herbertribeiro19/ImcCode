import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Title() {
    return (
        <View>
            <Text style={styles.containerText}>IMC CALCULATE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#ffebcd",
    },

});