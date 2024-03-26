import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS } from "../constants/theme";

var textBorderColor = COLORS.primary;

function HomescreenButton(props) {
    textBorderColor = props.color;

    return (
        <View style={props.style}>
            <TouchableOpacity style={[styles.button, {borderColor: props.color}]} onPress={props.onPress}>
                <Image
                    style={styles.buttonImageIconStyle}
                    source={props.image}
                />
                {/*<View style={styles.CircleShapeView}></View>*/}

                <Text style={[styles.text, {color: props.color}]}>
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
        fontFamily: "Lexend_400Regular"
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