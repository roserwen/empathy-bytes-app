import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../RootNavigation.js';

function NavButton({ screenName, textName }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate(screenName)}>
        <Text>{textName}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "25%",
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default NavButton