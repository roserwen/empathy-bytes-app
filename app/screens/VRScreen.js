import {React, Suspense} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from "react-native"
import { COLORS } from '../../constants/theme';
import {Canvas, UseFrame} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';
import useControls from "r3f-native-orbitcontrols";
import Ashtray from '../../assets/Ashtray';
import LeftConverseModel from '../../assets/LeftConverseModel';
import Football2Model from '../../assets/Football2Model';
import BandUniformModel from '../../assets/BandUniformModel'; 
import Bookend from '../../assets/Bookend2';
import BuzzPlaque from '../../assets/BuzzPlaque';
import Modelairplane from '../../assets/Modelairplane';
import Ratcap from '../../assets/Ratcap';
import BorderBox from '../../constants/BorderBox';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function VRScreen({navigation, route}) {
    const [OrbitControls, events] = useControls()
    const {id} = route.params;
    if (id == 1) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <LeftConverseModel />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Buzz's Converse"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        Converse "Chuck Taylors" sneakers associated with Susan Davis, the first woman to be an official Buzz. Today Buzz wears Adidas reflecting the Yellow Jackets' partnership with the company.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 2) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <Ashtray />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Ashtray"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                    In 1935, Georgia Tech adopted a smoking policy that restricted smoking to the dormitories, dining hall, and faculty offices. Sixty years later, after health concerns regarding smoking were raised by the Surgeon General, Georgia Tech was required to designate buildings and facilities as non-smoking areas, with the exception of some private offices. In March of 2014 the entire University System of Georgia became tobacco free, prohibiting the use of all forms of tobacco products on Georgia Tech's campus.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 3) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <Football2Model />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Football"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        Clean, Old-Fashioned Hate is the name given to the Georgia-Georgia Tech football rivalry. The sports rivalry between the two institutions has traditionally focused on football, a sport in which both programs have historically been successful, with an annual game often held on Thanksgiving weekend. Georgia Tech claims four national championships: 1917, 1928, 1952, and 1990. After the firing of head coach Geoff Collins in 2022, Brent Keys has lead the Jackets to more success than they had in the last 4 years.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 4) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <BandUniformModel />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Old Band Uniform"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        The Georgia Tech marching band was founded in 1908 with an original roster of only 14 students. It was charted in 1911, making it one of the oldest student organizations at the school. This uniform was used during 1976-1983 under director Ken "Uncle Kenny" Durham.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 5) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <Bookend />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Bookend"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        The Georgia Tech Yellow Jackets played the University of California's Golden Bears the day after Christmas in 1936, upsetting the California team, 13-7. California were seen as potential Pacific Coast Conference Champions in 1936 while Tech was ranked 7th in the Southeastern Conference. These bookends may have been a product of Georgia Tech's Department of Ceramic Engineering in commemoration of the event.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 6) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <BuzzPlaque />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Buzz's Plaque"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        The term Yellow Jackets has been used to refer to Tech’s students and fans since the 1890s, where supporters wore yellow jackets to Tech’s sporting events. Buzz was invented in 1972 when Judi McNair donned a homemade costume. In 1980 Buzz was made the official mascot of the Georgia Tech Yellow Jackets after Richie Bland ran onto the football field (without permission) during a pep rally. Students who portray Buzz must keep it secret until they graduate, but are official student athletes and members of the cheer team. In 2023 Buzz became a national champion after placing first in the National Cheerleading Association’s Mascot Division.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 7) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <Modelairplane />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Model airplane"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        In the late 1940's, Georgia Tech students began the tradition of flying a model Yellow Jacket plane during the halftime of football games. The idea apparently originated with William Milar, who graduated from Tech's Aerospace program in 1950. Milar approached then band director, Ben Logan Sisk, with the idea, and the plane's appearance was incorporated into the Tech band's halftime show. Stuart L. Richmond (IM, '51) and William Cooksey (need to request his file from archives to find grad year) continued the tradition in the early 1950's.
                    </Text> 
                </BorderBox>
            </View>
        )
    } else if (id == 8) {
        return (
            <View {...events} style={styles.container}>
                <Canvas camera={{ fov:70, position: [0,5,0]}}>
                    <ambientLight />
                    <OrbitControls />
                    <directionalLight intensity={2} position={[0,0,50]} />
                    <Suspense fallback={null}>
                        <Ratcap />
                    </Suspense>
                </Canvas>
                <BorderBox title={"Old Ratcap"} 
                    borderColor={COLORS.primary} 
                    titleColor={COLORS.primary}
                    backgroundColor={'#FFFFFF'} 
                    isCentered={true}>
                    <Text style={styles.text}>
                        This Rat cap belonged to James Middleton (Mit) Fitzsimmons. Fitzsimmons was captain of the 1936 Georgia Tech football team and the first Yellow Jacket to be drafted into the NFL by the Chicago Cardinals (now Bears) in 1937. The tradition of wearing Rat caps began in 1915. Tech's freshmen were required to wear the caps everyday until the Thanksgiving Day game against the University of Georgia. Starting in the 1940s, students often recorded the dates and scores of that season's football games on each panel of the cap.
                    </Text> 
                </BorderBox>
            </View>
        )
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingBottom: 15,    
    },
    text: {
        color: COLORS.primary,
        fontFamily: "Lexend_400Regular",
        margin: 20
    },
})