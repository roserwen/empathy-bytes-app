import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

const BackArrow = () => {
    return (
        <TouchableOpacity onPress={() => }>
            <View style={styles.icon}>
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </View>
        </TouchableOpacity>);
}