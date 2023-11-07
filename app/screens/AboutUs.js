import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useFonts } from 'expo-font';

function AboutUs() {
    //font :(
    const [fontsLoaded] = useFonts({
        "DM-Sans": require('../../assets/fonts/DMSans-Regular.ttf'),
        "DM-Sans-I": require('../../assets/fonts/DMSans-Italic.ttf'),
        "DM-Sans-B": require('../../assets/fonts/DMSans-Bold.ttf'),
        "DM-Sans-BI": require('../../assets/fonts/DMSans-BoldItalic.ttf'),
        "DM-Sans-L": require('../../assets/fonts/DMSans-Light.ttf'),
        "DM-Sans-LI": require('../../assets/fonts/DMSans-LightItalic.ttf'),
        "DM-Sans-EL": require('../../assets/fonts/DMSans-ExtraLight.ttf'),
        "DM-Sans-ELI": require('../../assets/fonts/DMSans-ExtraLightItalic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
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
        //justifyContent: "center",
        paddingTop: 50
    },
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        //padding: 50,
    },
    text: {
        color: "#000000",
        // position: "absolute",
        textAlign: "center"
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 20
    },
    image: {
        width: 300,
        height: 300,
    },

})

export default AboutUs;