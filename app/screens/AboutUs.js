import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
function AboutUs() {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
                this is the about us screen
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
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    text: {
        color: "#000000",
        // position: "absolute",
        textAlign: "center"
    },
})

export default AboutUs;