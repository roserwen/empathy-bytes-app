import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native"
import { COLORS } from "../../constants/theme"
import { teamData } from '../../constants/teamsData';
import BorderBox from '../../constants/BorderBox';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { fb_app, fb_storage } from '../../firebaseConfig';
import SafeAndroidView from '../../constants/SafeAndroidView';

function IndividualTeam({ navigation, route }) {
    const { team, id, teamPic } = route.params;
    // [picURL, setPicTeam] = useState("");
    
    // useEffect(() => {
    //     getDownloadURL(ref(fb_storage, teamPic))
    //     .then((url) => {
    //         setPicTeam(url);
    //         // Or inserted into an <img> element
    //     })
    //     .catch((error) => {
    //         // Handle any errors
    //     });
    // },[]);

    return (
    <SafeAreaView style={styles.container}>
        <FlatList style={styles.flatList}
            data={teamData[id - 1].description}
            renderItem={({item}) => (
                <Section 
                    id={item.id} 
                    text={item.text} 
                    title={item.name}
                    tag={item.tag}
                    devs={item.devs}
                    teamPic={item.teamPic}
                    techStackImages={item.techStackImages}
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
    </SafeAreaView>
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
                            <Image style={styles.teamImage} source={props.teamPic ? props.teamPic : null} />
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
                    isCentered={true}>
                    <FlatList
                        style={[styles.devContainer]}
                        data={props.devs}
                        renderItem={({item}) => (
                            <View key={item.name} style={styles.headshotContainer}>
                                <Image
                                    style={styles.developerImage}
                                    source={item.image}
                                />
                                <Text style={{fontSize: 15, color: COLORS.secondary, fontFamily: "Lexend_400Regular"}}>
                                    {item.name}
                                </Text>
                                <Text style={{fontSize: 12, color: COLORS.secondary, fontFamily: "Lexend_400Regular"}}>
                                    {item.role}
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={
                            <View style={styles.separator}/>
                    }/>
                </BorderBox>
            )
        // Tech stack box
        case ('tech-stack'):
            return (
                <BorderBox 
                    title={props.title}
                    titleColor={props.titleColor}
                    borderColor={props.borderColor}
                    backgroundColor={props.backgroundColor}
                    isCentered={false}
                >
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                    <View style={styles.techStackContainer}>
                        {props.techStackImages.map((image, index) => (
                            <Image key={index} source={image} style={styles.techStackImage} />
                        ))}
                    </View>
                </BorderBox>
            )
        // TO DO: add cases for other box types, e.g. VR models or video embeds
=======
    //if screen is app or web team page: render FlatList of description section, tech stack section, and dev section
    if (id == 1 || id === 2) {
        return (
            <SafeAreaView style={[styles.container, SafeAndroidView.AndroidSafeArea]}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} teamPic={teamPic} title={item.name} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }
                    >
                </FlatList>
            </SafeAreaView>
        )
    //Section will have to be different
    //if screen is vr/ar screen
    //TODO add way to integrate the 3d objects
    } else if (id == 3) {
        return (
            <SafeAreaView style={[styles.container, SafeAndroidView.AndroidSafeArea]}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} teamPic={teamPic} title={item.name} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }>
                </FlatList>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("VR Models")}}>
                    <Text style={styles.text2}>
                        Go to VR Model
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    //Section will have to be different
    //if screen is media screen
    //TODO add way to embed youtube video
    } else if (id == 4) {
        return (
            <SafeAreaView style={[styles.container, SafeAndroidView.AndroidSafeArea]}>
                <FlatList style={styles.flatList}
                    data={teamData[id - 1].description}
                    renderItem={({item}) => <Section id={item.id} text={item.text} title={item.name} teamPic={teamPic} titleColor={COLORS.tertiary} borderColor={COLORS.tertiary} backgroundColor={COLORS.primary}/>}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={
                        <View style={styles.separator}/>
                    }
                    >
                </FlatList>
            </SafeAreaView>
        )
    }
}

//TODO styling + changing it depending on the screen
const Section = (props) => {
    if (props.id == 0) {
        return (
            <BorderBox title={props.title}
            titleColor={props.titleColor}
            borderColor={props.borderColor}
            backgroundColor={props.backgroundColor}
            isCentered={true}>
                <View style={styles.imageContainer}>
                    <Image style={styles.teamImage} source={props.teamPic ? props.teamPic : null} />
                </View>
            </BorderBox>
        )
    } else {
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
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        //paddingTop: 50,
        backgroundColor: COLORS.primary,
    },
    separator: {
        padding: 10,
    },
    imageContainer: {
        // alignItems: "center",
        // justifyContent: "center",
        width: '100%',
        height: '70',
    },
    flatList: {
        backgroundColor: COLORS.primary,
        paddingTop: 40,
        width: "90%",
    },
    text: {
        color: COLORS.tertiary,
        fontFamily: "Lexend_400Regular",
        margin: 20
    },
    text2: {
        textAlign: "center",
        color: COLORS.primary,
        fontFamily: "Lexend_400Regular"
    },
    button: {
        width: "50%",
        height: 80,
        backgroundColor: COLORS.tertiary,
        borderRadius: 15,
        marginBottom: 40,
        justifyContent: "center",
    },
    titleText: {
        fontSize: 30,
        //fontWeight: "bold",
        color: COLORS.tertiary,
        fontFamily: "Lexend_700Bold"
    },
    teamImage: {
        width: '100%',
        height: 200,
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
    devContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 40,
        rowGap: 5,
        justifyContent: "center",
        paddingTop: 30,
        paddingBottom: 10,
    },
    headshotContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    developerImage: {
        borderRadius: '100%',
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: COLORS.secondary,
    },
    techStackContainer: {
        flexDirection: 'row', // Arrange images in a row
        flexWrap: 'wrap',     // Allow wrapping to next line
        justifyContent: 'center', // Center the images horizontally
        marginTop: 10,
        marginBottom: 10,
    },
    techStackImage: {
        width: '40%', // Set width to 45% to allow two images per row
        height: 100,  // Adjust height as needed
        margin: 5,    // Add some margin around each image for spacing
        resizeMode: 'contain', // Maintain aspect ratio
    },
})

export default IndividualTeam;