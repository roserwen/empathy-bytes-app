import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"
import { COLORS } from "../../constants/theme"
import { teamData } from '../../constants/teamsData';
import BorderBox from '../../constants/BorderBox';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { fb_app, fb_storage } from '../../firebaseConfig';

function IndividualTeam({ navigation, route }) {
    const { team, id, teamPic } = route.params;
    [picURL, setPicTeam] = useState("");
    
    useEffect(() => {
        getDownloadURL(ref(fb_storage, teamPic))
        .then((url) => {
            setPicTeam(url);
            // Or inserted into an <img> element
        })
        .catch((error) => {
            // Handle any errors
        });
    },[]);

    return (
        <View style={styles.container}>
            <FlatList style={styles.flatList}
                data={teamData[id - 1].description}
                renderItem={({item}) => (
                    <Section 
                        id={item.id} 
                        text={item.text} 
                        title={item.name}
                        tag={item.tag}
                        devs={item.devs}
                        titleColor={COLORS.tertiary} 
                        borderColor={COLORS.tertiary} 
                        backgroundColor={COLORS.primary}/>
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={
                    <View style={styles.separator}/>
                }
                >
            </FlatList>
        </View>
)}

//TODO styling + changing it depending on the screen
const Section = (props) => {
    switch (props.tag) {
        // Title box
        case ('title'):
            return (
                <BorderBox title={props.title}
                    titleColor={props.titleColor}
                    borderColor={props.borderColor}
                    backgroundColor={props.backgroundColor}
                    isCentered={true}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.teamImage} source={picURL ? {uri: picURL} : null} />
                        </View>
                    </BorderBox>
            )
        // Text box
        case ('text'):
            return (
                <BorderBox title={props.title}
                titleColor={props.titleColor}
                borderColor={props.borderColor}
                backgroundColor={props.backgroundColor}
                isCentered={false}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                </BorderBox>
            )
        // Developers box
        case ('devs'):
            return (
                <BorderBox title={props.title}
                    titleColor={props.titleColor}
                    borderColor={props.borderColor}
                    backgroundColor={props.backgroundColor}
                    isCentered={false}>
                    <FlatList
                        data={props.devs}
                        renderItem={({item}) => (
                            <View key={item.name} style={styles.headshotContainer}>
                                <Image
                                    style={styles.developerImage}
                                    // source={dev.img}
                                />
                                <View style={styles.CircleShapeView}></View>
                                <Text style={{fontSize: 15, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                    {item.name}
                                </Text>
                                <Text style={{fontSize: 12, color: COLORS.primary, fontFamily: "Lexend_400Regular"}}>
                                    {item.role}
                                </Text>

                            <Text key={item.name}>{item.name}</Text>
                            </View>
                    )}/>
                </BorderBox>
            )
        // TO DO: add cases for other box types, e.g. VR models or video embeds
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: COLORS.primary,
    },
    separator: {
        padding: 10,
    },
    imageContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        width: '100%',
    },
    flatList: {
        backgroundColor: COLORS.primary,
        paddingTop: 40,
        width: "90%"
    },
    text: {
        color: COLORS.tertiary,
        fontFamily: "Lexend_400Regular",
        margin: 20
    },
    button: {
        width: 100,
        height: 80,
    },
    titleText: {
        fontSize: 30,
        //fontWeight: "bold",
        color: COLORS.tertiary,
        fontFamily: "Lexend_700Bold"
    },
    teamImage: {
        width: '90%',
        // height: '85%',
        aspectRatio: 1.5, // Maintain aspect ratio
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        marginTop: 50,
        marginBottom: 25,
        // borderColor: COLORS.secondary, // Border color
        // borderRadius: 10, // Border radius for rounded corners
    },
    CircleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: COLORS.primary,
    },
})

export default IndividualTeam;