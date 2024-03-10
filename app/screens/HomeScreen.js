import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native"
import { useFonts } from 'expo-font';
import { COLORS, FONT } from '../../constants/theme';
import HomescreenButton from '../../constants/HomescreenButton';
import people from '../../assets/GrpPeople.png';
import projects from '../../assets/empathybytes.png';
import contact from '../../assets/Contact.png';
import teams from '../../assets/Teams.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
            <Text style={[styles.text, {fontFamily: "DM-Sans-B"}]}>
                HOME
            </Text>
            <HomescreenButton text="About Us" style={styles.button} font="DM-Sans-B" image={people} color="#193054" onPress={() => navigation.navigate('About Us')}></HomescreenButton>
            <HomescreenButton text="Projects" style={styles.button} font="DM-Sans-B" image={projects} color="#B3A369" onPress={() => navigation.navigate('Projects')}></HomescreenButton>
            <HomescreenButton text="Teams" style={styles.button} font="DM-Sans-B" image={teams} color="#193054" onPress={() => navigation.navigate('Teams')}></HomescreenButton>
            <HomescreenButton text="Contact Us" style={styles.button} font="DM-Sans-B" image={contact} color="#B3A369" onPress={() => navigation.navigate('Contact Us')}></HomescreenButton>
            {/*
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
            <TouchableOpacity onPress={() => navigation.navigate('IndividualTeam')} >
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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexBasis: '50%',
        backgroundColor: "#FFFBE7"
    },
    text: {
        color: "#B3A369",
        textAlign: "center",
        paddingBottom: 25,
        fontSize: 30,
        
    },
    button: {
        flexDirection: "column",
        width: windowWidth,
        height: 150,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
    },
})

export default HomeScreen;