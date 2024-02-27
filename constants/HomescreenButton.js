//this is only the button for the home screen - this is Rose's assignment
//sorry, accidentally did most of it

import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";

var textBorderColor = "#193054";


function HomescreenButton(props) {
    //font :(
    const [fontsLoaded] = useFonts({
        "DM-Sans": require('../assets/fonts/DMSans-Regular.ttf'),
        "DM-Sans-I": require('../assets/fonts/DMSans-Italic.ttf'),
        "DM-Sans-B": require('../assets/fonts/DMSans-Bold.ttf'),
        "DM-Sans-BI": require('../assets/fonts/DMSans-BoldItalic.ttf'),
        "DM-Sans-L": require('../assets/fonts/DMSans-Light.ttf'),
        "DM-Sans-LI": require('../assets/fonts/DMSans-LightItalic.ttf'),
        "DM-Sans-EL": require('../assets/fonts/DMSans-ExtraLight.ttf'),
        "DM-Sans-ELI": require('../assets/fonts/DMSans-ExtraLightItalic.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    textBorderColor = props.color;

    return (
        <View style={props.style}>
            <TouchableOpacity style={[styles.button, {borderColor: props.color}]} onPress={props.onPress}>
                <Image
                    style={styles.buttonImageIconStyle}
                    source={props.image}
                />
                {/*<View style={styles.CircleShapeView}></View>*/}

                <Text style={[styles.text, {fontFamily: props.font}, {color: props.color}]}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

  

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        //borderColor: "#193054", Now given from props in HomeScreen
        borderWidth: 2,
        borderRadius: 40,
        //backgroundColor: "#B3A369",
        height: 130,
        width: 300,
        paddingLeft: 30,
    },
    text: {
        paddingLeft: 20,
        fontSize: 25,
        textAlign: "left",
    },
    buttonImageIconStyle: {
        paddingRight: 0,
        margin: 0,
        height: 70,
        width: 70,
        resizeMode: 'cover',
    },
    CircleShapeView: {
        //To make Circle Shape
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#D9D9D9',
      },
})
export default HomescreenButton;