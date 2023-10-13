import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

function WelcomeScreen({navigation}) {

    return (
        <View style={styles.container}> 
            <Text style={styles.text}>
              Welcome to the Welcome screen!!
            </Text>
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
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
    logo: {
        width: 80,
        height: 80,
        padding: 80,
    },
    button: {
        width: 100,
        height: 80,
    },
})

export default WelcomeScreen;