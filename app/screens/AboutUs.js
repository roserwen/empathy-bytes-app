import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useFonts } from 'expo-font';
import { COLORS, FONT } from '../../constants/theme';

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
            <Text style={styles.titleText}>
                About Us
            </Text>
            <Image
                    style={styles.image}
                    source={require('../../assets/teampic.jpeg')}
            />
            <Text style={styles.text}>
            Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we create digital scholarship and improve access to resources. 
            </Text>
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
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        //padding: 50,
    },
    text: {
        color: "white",
        // position: "absolute",
        textAlign: "center",
        margin: 20
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

})

export default AboutUs;