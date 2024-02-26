import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";
import { COLORS, FONT, SIZES } from './theme';
const BigButton = (props) => {
    return (
        <View style = {props.dir ? styles.left : styles.right}> 
            <TouchableOpacity 
                style = {props.dir ? styles.leftButton : styles.rightButton}
                onPress = {props.onPress}>
                <View style={props.dir ? styles.leftBlue : styles.rightBlue}>
                    <View style={styles.iconcontainer}>
                        <Image
                            style={styles.logo}
                            source={{
                            uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                            resizeMode='stretch'
                        />
                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={styles.text}> { props.name } </Text>
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
        alignItems: 'flex-end',
    },
    rightBlue: {
        backgroundColor: '#102F54',
        width: '97%',
        height: '88%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'flex-end',
    },

    iconcontainer: {
        width: 175,
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 70,
        height: 20,
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
    logo: {
        width: 130,
        height: 130,
    },
})
