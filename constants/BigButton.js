import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { COLORS, FONT, SIZES } from './theme';
const BigButton = ({name, dir, type, onPress}) => {
    return (
        <View style = {dir ? styles.left : styles.right}> 
            <TouchableOpacity 
                style = {dir ? styles.leftButton : styles.rightButton}
                onPress = {onPress}>
                <View style={dir ? styles.leftBlue : styles.rightBlue}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/teampic.jpeg')}
                        />
                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={styles.text}> { name } </Text>
                        <Text style={styles.type}> { type } </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default BigButton;

const styles = StyleSheet.create({
    left: {
        flexDirection: 'row',
        width: '100%',
        height: 140,
        justifyContent: 'flex-start',
    },
    right: {
        flexDirection: 'row',
        width: '100%',
        height: 140,
        justifyContent: 'flex-end',
    },

    leftButton: {
        width: 350,
        height: '100%',
        backgroundColor: '#FFFBE7',
        borderColor: '#ABA174',
        borderWidth: 1.25,
        marginLeft: -1.25,
        flexDirection: 'row',
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        alignItems: 'center',
    },
    rightButton: {
        width: 350,
        height: '100%',
        backgroundColor: '#FFFBE7',
        borderColor: '#ABA174',
        borderWidth: 1.25,
        marginLeft: -1.25,
        flexDirection: 'row-reverse',
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        alignItems: 'center',
    },

    leftBlue: {
        backgroundColor: '#102F54',
        width: '97%',
        height: '88%',
        marginLeft: -1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightBlue: {
        backgroundColor: '#102F54',
        width: '97%',
        height: '88%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,

        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textcontainer: {
        width: 175,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: "bold",
        margin: 15,
    },
    type: {
        color: 'white',
    },
    imageContainer: {
        // justifySelf: 'center',
        // alignSelf: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
})
