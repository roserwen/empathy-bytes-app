import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

//pass in as props the name of the previous page that you want to navigate back to
//such as: <BackArrow navigation={navigation} page='Home'/>
export default function BackArrow({ navigation, page }) {
    // const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(page)} style={styles.button}>
            <View>
                <Ionicons name="arrow-back-sharp" size={35} color="black" style={styles.arrow}/>
            </View>
        </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button: {
        marginLeft: -300,
    },
});