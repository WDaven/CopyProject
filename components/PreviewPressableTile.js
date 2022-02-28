import React from 'react';
import { StyleSheet, Text,Pressable, Image } from 'react-native';

// Needs large overhaul this is just a starting point from an existing file I had


export default function FoodButton(props) {
    const { onPress, btnText, resturantImage } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{btnText}</Text>
        <Image style={styles.image} source={resturantImage}/>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
      borderColor: 'black',
    },
    text: {
      alignSelf:'flex-end',
      fontSize: 30,
      lineHeight: 30,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      top: '50%',
      
    },
    image: {
      alignSelf:'flex-start',
      width: 150,
      height: 60,
      resizeMode: 'contain',
      marginBottom: 20,



  }
  });