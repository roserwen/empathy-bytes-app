import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useFonts } from 'expo-font';
import { COLORS, FONT } from '../../constants/theme';

function ContactUs({ navigation, route }) {
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
            <Text style={styles.titleText}>
                Contact Us
            </Text>
            <Image
                    style={styles.logo}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
            />
            <Text style={styles.text}>
            Contact our VIP Coordinator at alison.valk@library.gatech.edu for more information and additional team leader contacts.
            </Text>
            <TouchableOpacity style={styles.goButton} onPress={() => navigation.navigate('Home')} >
                    <Text  style={styles.goButtonText}>
                        Go Back
                    </Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary
    },
    logo: {
        width: 80,
        height: 80,
        padding: 80,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 100
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        margin: 20,
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 20
    },
    image: {
        width: 410,
        height: 200,
        marginBottom: 10,
        borderRadius: 50,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "white",
        margin: 20,
    },
    goButton: {
        borderRadius: 40,
        height: 50,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B3A369",
    },
    goButtonText: {
        color: COLORS.secondary,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
    },
})

export default ContactUs;