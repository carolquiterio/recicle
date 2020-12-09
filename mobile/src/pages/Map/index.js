import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import IconFlecha from 'react-native-vector-icons/Feather';
import mapMarker from '../../assets/imagens/img.png';
import styles, {Title, Container} from './styles';

export default function Map({navigation}) {
  //const navigation = useNavigation();

  const handleNavigateToCollectItem = () => {
    navigation.navigate('CollectItem');
  };

  return (
    <Container>
      <Title>Confira os pontos de coleta próximos a você!</Title>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -22.9758108,
          longitude: -47.1266827,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.1,
            y: 0.6,
          }}
          coordinate={{
            latitude: -22.9758108,
            longitude: -47.1266827,
          }}>
          <Callout tooltip onPress={handleNavigateToCollectItem}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Equipe reciclagem</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </Container>
  );
}
