import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"

//thing for adding new project buttons
const data = [
    {id: 1, name: "project 1" //, imgSrc: "imgepath"
    },
    {id: 2, name: "project 2"}
];

//appearance of each button
const ProjectItem = ({ name }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}> {name} </Text>
        </TouchableOpacity>
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <ProjectItem name={item.name} />
    )
};

//flatlist is like scrollview but better apparently
function Projects({}) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
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
    },
    button: {
        backgroundColor: "#004B87",
        width: 150,
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#FFFFFF"
    },
    separator: {
        height: 10
    }
})

export default Projects;