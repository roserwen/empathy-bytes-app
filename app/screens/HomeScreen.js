import {React,} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native"
import { COLORS } from '../../constants/theme';
import useControls from "r3f-native-orbitcontrols";
import HomescreenButton from '../../constants/HomescreenButton';
import people from '../../assets/GrpPeople.png';
import projects from '../../assets/empathybytes.png';
import contact from '../../assets/Contact.png';
import teams from '../../assets/Teams.png';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigation}) {
    const [OrbitControls, events] = useControls()
    return (

        /*<View {...events} style={{flex:1}}>
            <Canvas camera={{ fov:70, position: [0,0,1]}}>
                <ambientLight />
                <OrbitControls />
                <directionalLight intensity={2} position={[0,0,50]} />
                <Suspense fallback={null}>
                    <RightConverseModel />
                </Suspense>
            </Canvas>
        </View>*/

        <View style={styles.container}>
            <Text style={styles.text}>
                Home
            </Text>
            <HomescreenButton text="About Us" style={styles.button} image={people} color={COLORS.primary} onPress={() => navigation.navigate('About Us')}></HomescreenButton>
            <HomescreenButton text="Projects" style={styles.button} image={projects} color={COLORS.secondary} onPress={() => navigation.navigate('Projects')}></HomescreenButton>
            <HomescreenButton text="Teams" style={styles.button} image={teams} color={COLORS.primary} onPress={() => navigation.navigate('Teams')}></HomescreenButton>
            <HomescreenButton text="Contact Us" style={styles.button} image={contact} color={COLORS.secondary} onPress={() => navigation.navigate('Contact Us')}></HomescreenButton>
            {/*
            <TouchableOpacity onPress={() => navigation.navigate('Projects')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Teams')} >
              <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')} >
              <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualTeam')} >
                <Image
                    style={styles.button}
                    source={{
                    uri: 'https://i.stack.imgur.com/4G1qY.png'}}
                />
                </TouchableOpacity>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexBasis: '50%',
        backgroundColor: COLORS.tertiary,
        padding: 10,
    },
    text: {
        color: COLORS.secondary,
        textAlign: "center",
        paddingBottom: 25,
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: "Lexend_400Regular"
    },
    button: {
        flexDirection: "column",
        width: windowWidth,
        height: 150,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: "center",
    },
    list: {
        width: '100%',
        alignItems: "center",
    }
})

export default HomeScreen;