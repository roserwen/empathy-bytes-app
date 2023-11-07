import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native"
import { COLORS, FONT } from '../../constants/theme';
import FadeInView from '../../constants/FadeInView';
import { useFonts } from 'expo-font';

function WelcomeScreen({navigation}) {
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
            <FadeInView>
                <Text style={[styles.title, {fontFamily: "DM-Sans-B"}]}>
                    EMPATHY BYTES
                </Text>
            </FadeInView>
            <FadeInView delay={250} >
                <View style={styles.imagecontainer}>
                    <Image
                        style={styles.logo}
                        source={{
                        uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                    />
                </View>
            </FadeInView>
            <FadeInView delay={500}>
                <Text style={[styles.text, styles.marginBottom, {fontFamily: "DM-Sans-B"}]}>
                    Creating Tech Centered Around Empathy
                </Text>
            </FadeInView>
            <FadeInView delay={750}>
                <TouchableOpacity style={styles.goButton} onPress={() => navigation.navigate('Home')} >
                    <Text  style={styles.goButtonText}>
                        Explore
                    </Text>
                </TouchableOpacity>
            </FadeInView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        // borderColor: "red",
        // borderWidth: 2,
    },
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        // position: "absolute",
        textAlign: "center"
    },
    logo: {
        width: 80,
        height: 80,
        padding: 80,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 100
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
    title: {
        fontSize: 75,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        textShadowColor: "rgba(0, 0, 0, 1)",
        textShadowOffset: {width: -1, height: 10},
        textShadowRadius: 10,
    },
    marginBottom: {
        marginBottom: 30,
    },
})

export default WelcomeScreen;