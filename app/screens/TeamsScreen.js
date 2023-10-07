import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"

const data = [
    {id: 1, name: "team 1" //, imgSrc: "imgepath"
    },
    {id: 2, name: "team 2"}
];

//appearance of each button
const TeamItem = ({ name }) => {
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
        <TeamItem name={item.name} />
    )
};

//flatlist is like scrollview but better apparently
function Teams() {
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

export default Teams;