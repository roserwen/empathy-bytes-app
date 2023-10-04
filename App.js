import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import HomeScreen from './app/screens/HomeScreen.js';
import ProjectsScreen from "./app/screens/ProjectsScreen.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen} 
          options={{animation: "fade", 
                    headerShadowVisible: false}}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen} 
          options={{animation: "fade",
                    headerShadowVisible: false,
                    headerBackTitle:"Back"}}/>
        <Stack.Screen
          name="Projects"
          component={ProjectsScreen} 
          options={{animation: "fade",
                    headerShadowVisible: false,
                    headerBackTitle:"Back"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
