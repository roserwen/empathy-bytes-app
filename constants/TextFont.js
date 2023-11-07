//unused
import React from "react";
import { useFonts } from "expo-font";

function TextFont(props) {
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
        <>
            <Text style={styles(this.props).text}>
                {props.text}
            </Text>
        </>
    );
}

const styles = (props) => StyleSheet.create({
    text: {
        fontFamily: props.font
    }
})

export default TextFont;