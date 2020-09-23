import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ImageCarol from '../../assets/carol.jpg';
import LinearGradient from 'react-native-linear-gradient';

import {
  Container,
  ThreeText,
  NameText,
  ThreeContainer,
  ImageContainer,
  ImageLogo,
  NumberOfThreesText,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <ImageContainer>
        <ImageLogo source={ImageCarol} />
      </ImageContainer>

      <NameText>@carol_quiterio</NameText>

      <LinearGradient
        style={styles.iconTabRound}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#08DDB4', '#34cb79']}>
        <ThreeText>TOTAL DE ÁRVORES SALVAS</ThreeText>
        <NumberOfThreesText>289</NumberOfThreesText>
      </LinearGradient>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTabRound: {
    height: '20%',
    width: '100%',
    borderRadius: 14,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#9C27B0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
