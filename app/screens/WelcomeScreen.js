import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native"
import { COLORS, FONT } from '../../constants/theme';
import FadeInView from '../../constants/FadeInView';

function WelcomeScreen({navigation}) {

    return (
        <View style={styles.container}> 
            <FadeInView>
                <Text style={styles.title}>
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
                <Text style={[styles.text, styles.marginBottom]}>
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
        fontSize: 35,
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