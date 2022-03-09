import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps'; 
import PreviewPressableTile from './PreviewPressableTile';

export default function MapComponent() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 33.776684,
        longitude: -84.398471,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.019,
      }}>
        <Marker
            key={'index'}
            coordinate={{
                latitude: 33.77843874968607,
                longitude: -84.4038864219189,
              }}
              onPress={() => console.log("I'm Pressed")}
            title={'Fitten'}
            description={'test'}
        />
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