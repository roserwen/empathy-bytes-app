import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useFonts } from 'expo-font';

function IndividualProject({ navigation, route }) {
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

    const { name, description } = route.params;
    return (
        <View style={styles.container}> 
            <View style={styles.imagecontainer}>
                <Image
                    style={styles.teamImage}
                    source={{
                    uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                />
            </View>
            <Text style={styles.titleText}>
                { name }
            </Text>
            <Text style={styles.text}>
                { description }
            </Text>
            <Text style={styles.text}>
                Press this button to return back to Welcome Screen.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')} >
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
        alignItems: "center",
        justifyContent: "center",
    },
    imagecontainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        color: "#000000",
    },
    button: {
        width: 100,
        height: 80,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#000000",
    },
    teamImage: {
        width: 80,
        height: 80,
        padding: 80,
    },
})

export default IndividualProject;