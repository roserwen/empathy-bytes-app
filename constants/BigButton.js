import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { COLORS, FONT, SIZES } from './theme';
const BigButton = (props) => {
    return (
        <View style = {props.dir ? styles.container : styles.container2}> 
            <TouchableOpacity 
                style = {props.dir ? styles.button : styles.button2}
                onPress = {props.onPress}
            >
                <View style={styles.iconcontainer}>
                    <Image
                        style={styles.logo}
                        source={{
                        uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                        //uri: props.uri}}
                        resizeMode='stretch'
                    />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}> { props.name } </Text>
                    <Image
                        style={styles.arrow}
                        source={{
                        uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                        resizeMode='stretch'
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default BigButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 140,
        justifyContent: 'flex-start',
    },
    container2: {
        flexDirection: 'row',
        width: '100%',
        height: 140,
        justifyContent: 'flex-end',
    },
    button: {
        width: 350,
        height: '100%',
        backgroundColor: COLORS.tertiary,
        flexDirection: 'row',
        borderTopRightRadius: 23,
        borderBottomRightRadius: 23,
    },
    button2: {
        width: 350,
        height: '100%',
        backgroundColor: COLORS.tertiary,
        flexDirection: 'row-reverse',
        borderTopLeftRadius: 23,
        borderBottomLeftRadius: 23,
    },
    iconcontainer: {
        width: 175,
        height: 140,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 100,
        height: 10,
    },
    textcontainer: {
        width: 175,
        height: 140,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: "bold",
        margin: 20,
    },
    logo: {
        width: 130,
        height: 130,
    },
})
