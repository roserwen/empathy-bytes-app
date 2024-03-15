import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { projectData } from "../../constants/projectsData";
import { useFonts } from 'expo-font';
import ProjectButton from '../../constants/ProjectButton';
import BackArrow from '../../constants/BackArrow';


//appearance of each button + trying to push the new screen onto nav stack
const ProjectItem = (props) => {
    const navigation = useNavigation();

    return (
        <ProjectButton
            onPress={() => {
                navigation.navigate("Individual Project", {name: props.name, description: props.description})
            }}
            name = {props.name}
            type = {props.type}
            dir = {props.id % 2 == 1 ? true : false}
            image = {props.image}
        >
        </ProjectButton>
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <ProjectItem name={item.name} description={item.description} type={item.type} id={item.id} image={item.image} styles={styles.button} />
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
        backgroundColor: '#FFFBE7',
        fontFamily: "Lexend",
    },
    title: {
        fontSize: 30,
        fontWeight:400,
        color: "#B0A470",
        marginTop: -20,
        paddingBottom: 20,
    },
    separator: {
        height: 10
    }
})

export default Projects;