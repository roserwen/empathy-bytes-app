import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useFonts } from 'expo-font';
import HomescreenButton from '../../constants/HomescreenButton';

function HomeScreen({navigation}) {
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
            <HomescreenButton text="About Us" style={styles.button} font="DM-Sans-B" onPress={() => navigation.navigate('About Us')}></HomescreenButton>
            <HomescreenButton text="Projects" style={styles.button} font="DM-Sans-B" onPress={() => navigation.navigate('Projects')}></HomescreenButton>
            <HomescreenButton text="Teams" style={styles.button} font="DM-Sans-B" onPress={() => navigation.navigate('Teams')}></HomescreenButton>
            {/*<Text style={[styles.text, {fontFamily: "DM-Sans-BI"}]}>
                Welcome to the home screen!!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Projects')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Teams')} >
              <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')} >
              <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            {/*<TouchableOpacity onPress={() => navigation.navigate('IndividualTeam')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
                </TouchableOpacity>*/}
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
        color: "#000000",
        textAlign: "center"
    },
    button: {
        width: 100,
        height: 80,
    },
})

export default HomeScreen;