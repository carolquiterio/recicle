import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import IconFlecha from 'react-native-vector-icons/Feather';
import mapMarker from '../../assets/images/map-marker.png';
import styles from './styles';

export default function RecicleMap(){
   return(
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
           latitude: -22.9758108,
           longitude: -47.1266827,
           latitudeDelta: 0.008,
           longitudeDelta: 0.008,
        }}
      >
       <Marker 
        icon={mapMarker}
        calloutAnchor={{
          x: 2.1,
          y: 0.6,
        }}
        coordinate={{
          latitude: -22.9758108,
          longitude: -47.1266827,
        }}
       >
        <Callout tooltip>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Equipe reciclagem</Text>
          </View>
        </Callout>
       </Marker>
      </MapView>

      <View style={styles.flechaVoltar}>
       <TouchableOpacity style={styles.back}>
        <IconFlecha name="arrow-left" size={28} color='#34CB79'/>
       </TouchableOpacity>
      </View>
    </View>
   );
}

