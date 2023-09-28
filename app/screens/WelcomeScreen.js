import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

function WelcomeScreen({navigation}) {

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
              Welcome to the Welcome screen!!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
              <Text>Click me!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#700000",
        // position: "absolute",
        textAlign: "center"
    }
})

export default WelcomeScreen;