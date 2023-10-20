import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
function AboutUs() {
    return (
        <View style={styles.container}> 
            <Image
                    style={styles.image}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
            />
            <Text style={styles.text}>
                this is where we will put text about us
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
    image: {
        width: 300,
        height: 300,
    },

})

export default AboutUs;