import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, AppRegistry } from "react-native"
import { projectData } from "./projectsData.js"

//new project screen to push onto nav stack
const ProjectScreen = (props) => {
    return (
            <View style={styles.container}> 
                <View style={styles.imagecontainer}>
                    <Image
                        style={styles.teamImage}
                        source={{
                        uri: 'https://educast.library.gatech.edu/wp-content/uploads/2020/10/cropped-logoGearsOnlyRound-1-2.png'}}
                    />
                </View>
                <Text style={styles.titleText}>
                    { props.name }
                </Text>
                <Text style={styles.text}>
                    { props.description }
                </Text>
                <Text style={styles.text}>
                    Press this button to return back to the Projects page.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Projects')} >
                    <Image
                        style={styles.button}
                        source={{
                        uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                    />
                </TouchableOpacity>
            </View>
    );
};

//appearance of each button + trying to push the new screen onto nav stack
const ProjectItem = (props) => {
    const navigation = useNavigation();
    AppRegistry.registerComponent(props.name, () => ProjectScreen(props.name, props.description ));
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.push(props.name)}>
            <Text style={styles.text}> { props.name } </Text>
        </TouchableOpacity>
    );
};

//render the button idrk actually
const renderItem = ({ item }) => {
    return (
        <ProjectItem name={item.name} description={item.description} />
    )
};

//flatlist is like scrollview but better apparently
function Projects() {
    return (
        <View style={styles.container}>
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