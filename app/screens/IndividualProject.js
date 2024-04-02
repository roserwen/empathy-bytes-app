import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native"
import { COLORS } from "../../constants/theme"
import BackArrow from '../../constants/BackArrow';
import BorderBox from '../../constants/BorderBox';

function IndividualProject({ navigation, route }) {
    const { name, description } = route.params;
    return (
        <View style={styles.container}> 
        <BackArrow navigation={navigation} page='Home' color="#ABA174"/>
         <TouchableOpacity onPress={() => navigation.navigate('Projects')} >
                
            </TouchableOpacity>
        <ScrollView>
            <View style={styles.titleContainer}>
            <BorderBox title={name} 
                        borderColor={COLORS.tertiary} 
                        titleColor={COLORS.tertiary} 
                        backroundColor={COLORS.primary} 
                        isCentered={false}> 
                        <Image 
                            style={styles.image}
                            source={require('../../assets/teampic.jpeg')}/>
                        
                        
            </BorderBox>
            </View>

            <View style={styles.titleContainer}>
            <BorderBox title={"Description"} 
                        borderColor={COLORS.tertiary} 
                        titleColor={COLORS.secondary}
                        backroundColor={COLORS.primary} 
                        isCentered={false}>
                        <Text style={styles.text}>
                            {description}
                        </Text> 
                    </BorderBox>
                    </View>
            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
        backgroundColor: COLORS.primary,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    descriptionContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "Lexend_400Regular",
        marginLeft: 20,
        marginRight: 20,
        top: 20,
        justifyContent: "center",
        paddingBottom: 30,
    },
    button: {
        width: 70,
        height: 40,
        marginTop: 50,
    },
    titleText: {
        fontSize: 30,
        // fontWeight: 'bold',
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Lexend_400Regular",
        marginLeft: 20,
        marginRight: 20,
    },
    teamImage: {
        width: 80,
        height: 80,
        padding: 80,
    },
    image: {
        width: 300,
        height: 250,
        left: 20,
        bottom: 20,
    },
})

export default IndividualProject;