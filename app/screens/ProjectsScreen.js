import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"

//json thing for adding new project buttons
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
                keyExtractor={(item) => item.id}>
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
        backgroundColor: "#0AAAAA",
        width: 80,
        height: 80
    },
    text: {
        textAlign: "center",
        padding: 15
    }
})

export default Projects;