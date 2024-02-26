import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { projectData } from "../../constants/projectsData";
import { useFonts } from 'expo-font';
import BigButton from '../../constants/BigButton';
import BackArrow from '../../constants/BackArrow';


//appearance of each button + trying to push the new screen onto nav stack
const ProjectItem = (props) => {
    const navigation = useNavigation();
    
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
        /*
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                navigation.navigate("Individual Project", {name: props.name, description: props.description})
            }}>
            <Text style={[styles.text, {fontFamily: "DM-Sans-B"}]}> { props.name } </Text>
        </TouchableOpacity>
        */
        <BigButton
            onPress={() => {
                navigation.navigate("Individual Team", {name: props.name, description: props.description})
            }}
            name = {props.name}
            dir = {props.id % 2 == 1 ? true : false}
        >
        </BigButton>
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <ProjectItem name={item.name} description={item.description} id={item.id} styles={styles.button} />
    )
};

//flatlist is like scrollview but better apparently
function Projects({ navigation }) {
    return (
        <View style={styles.container}>
            <BackArrow navigation={navigation} page='Home'/>
            <Text style={styles.title}> Projects </Text>
            <FlatList
                data={projectData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={
                    <View style={styles.separator}/>
                }>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: "#FFFBE7",
    },
    button: {
        backgroundColor: "#FAFAFA",
    },
    rightButton: {
        backgroundColor: "#FAFAFA",
    },
    leftButton: {
        backgroundColor: "#FAFAFA",
    },
    text: {
        color: "#FFFFFF"
    },
    title: {
        fontSize: 20,
        paddingBottom: 20,
        paddingTop: 10
    },
    separator: {
        height: 10
    }
})

export default Projects;