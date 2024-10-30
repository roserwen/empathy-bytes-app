import SafeAndroidView from "../../constants/SafeAndroidView";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from "react-native";
import { COLORS } from '../../constants/theme';
import BackArrow from '../../constants/BackArrow';
import {modelData} from '../../constants/modelData';
import ListButton from "../../constants/ListButton";


function Model({navigation}) {
    return (
        <SafeAreaView style={[styles.container, SafeAndroidView.AndroidSafeArea]}>
            <BackArrow navigation={navigation} page='Home' color='black'/>
            <Text style={styles.title}> Models </Text>
            <FlatList
                data={modelData}
                renderItem={({item}) => 
                    <ListButton
                        onPress={() => { navigation.navigate("VR Screen", {id: item.id})}}
                        //name = {item.modelName}
                        dir = {item.id % 2 == 1 ? true : false}
                        image = {item.picURL}>
                    </ListButton>
                }
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={
                    <View style={styles.separator}/>
                }>
            </FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#FFFBE7',
    },
    title: {
        fontSize: 30,
        //fontWeight:"bold",
        color: COLORS.secondary,
        marginTop: -30,
        paddingBottom: 20,
        fontFamily: "Lexend_700Bold",
    },
    separator: {
        height: 10,
    },
    button: {
        //flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#193054",
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: "#B3A369",
        height: 100,
        width: 100,
    },
    list: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#193054",
        borderWidth: 2,
        borderRadius: 40,
        height: 500,
        width: 200,
        padding: 15,
    },
    image: {
        width: 50,
        height: 50,
    }
})

export default Model;