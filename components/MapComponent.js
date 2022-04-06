import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet,  View, Dimensions, Text } from 'react-native';
import { Marker } from 'react-native-maps'; 

  
export default function MapComponent(props) { 

  return ( 
    <View style={styles.container} >
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 33.776684,
        longitude: -84.398471,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.019,
      }}>
        {props.dormData.map((marker, index ) => {
           return (
            <MapView.Marker
                key = {index}
                coordinate = {{
                    latitude: 33.776684 + Math.random(),
                    longitude: -84.398471,
                }}
                title = { marker.name }
            />
        )})
              }






          </MapView>
    </View>
  );
}
            


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});