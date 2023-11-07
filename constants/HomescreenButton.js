//this is only the button for the home screen - this is Rose's assignment
//sorry, accidentally did most of it

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

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

    return (
        <View style={props.style}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={[styles.text, {fontFamily: props.font}]}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: "#004B87",
        height: 50,
        width: 100,
    },
    text: {
        textAlign: "center",
        color: "#FFFFFF"
    }
})
export default HomescreenButton;