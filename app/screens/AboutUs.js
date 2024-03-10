import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { useFonts } from 'expo-font';
import { COLORS, FONT } from '../../constants/theme';
const windowWidth = Dimensions.get('window').width;

function AboutUs() {
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
            <ScrollView>
            <Image
                    style={styles.image}
                    source={require('../../assets/teampic.jpeg')}
            />
            <View style={styles.scrollContainer}> 
                
                <Text style={[styles.titleText, styles.colorGold]}>
						Our Team
				</Text>
                <Text style={styles.captionText}>
						What we do
				</Text>
                <View style={styles.outlineBubble}>
                    <Text style={[styles.text, styles.colorBlue]}>
                        Empathy Bytes VIP explores how multimedia and emerging technologies can enhance empathy and understanding as we create digital scholarship and improve access to resources.
				    </Text>
                </View>
                <Text style={[styles.captionText, styles.colorGold]}>
						Developers
				</Text>
                {/* The developer bubble encapsulates the developers. Each headshot container view is a different person */}
                <View style={[styles.outlineBubble, styles.colorGold, styles.developerBubble]}>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>
                    {/* */}
                    <View style={styles.headshotContainer}>
                        <View style={styles.CircleShapeView}></View>
                        <Text style={{fontSize: 15, color: "#193054"}}>
						    Name
				        </Text>
                        <Text style={{fontSize: 12, color: "#193054"}}>
						    Role
				        </Text>
                    </View>

                </View>
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 10,        
    },
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        //height: 2000, 
        paddingBottom: 30,
        width: windowWidth, 
        backgroundColor: "#FFFBE7", 
        borderRadius: 15
    },
    headshotContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    outlineBubble: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#193054",
        borderWidth: 1,
        borderRadius: 20,
        //height: 130,
        width: windowWidth - 50,
    },
    developerBubble: {
        //height: 500,
        padding: 30,
    },
    titleText: {
        fontSize: 50,
        color: "#B3A369",
        textAlign: "center",
        fontWeight: 'bold',
        margin: 20,
    },
    captionText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: "#193054",
        zIndex: 1,
    },
    text: {
        color: "#193054",
        //position: "absolute",
        textAlign: "left",
        margin: 15,
        fontFamily: "DM-Sans-B",
    },
    CircleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#193054',
    },
    image: {
        width: 410,
        height: 200,
        //marginBottom: 10,
        //borderRadius: 50,
    },
    colorGold: {
        color: "#B3A369",
        borderColor: "#B3A369",
    },
    colorBlue: {
        color: "#193054",
        borderColor: "#193054",
    }

})

export default AboutUs;