import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = (props) => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: true,
      delay: props.delay,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View 
      style={{
        ...props.style,
        opacity: fadeAnim, 
      }}>
      {props.children}
    </Animated.View>
  );
}

export default FadeInView