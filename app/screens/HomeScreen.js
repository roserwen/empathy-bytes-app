import React from 'react';
import { View, Text, StyleSheet } from "react-native"

function HomeScreen(props) {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
                Welcome to the home screen!!
            </Text>
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
        position: "absolute",
        textAlign: "center"
    }
})

export default HomeScreen;