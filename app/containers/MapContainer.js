import React, { Component } from 'react';
import MapView from 'react-native-maps'

import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native'

class MapContainer extends Component {
    render() {
        const { region } = this.props;
        console.log(region);
    
        return (
          <View style ={styles.container}>
            <StatusBar
                translucent 
                backgroundColor="rgba(236, 240, 241, 0.6)"
                barStyle='dark-content'
            />
            <MapView
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
  });

export default MapContainer;