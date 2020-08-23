import React from 'react';
import {View, Text, Image} from 'react-native';
import ImageCarol from '../../assets/carol.jpg';

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

      <ThreeContainer>
        <ThreeText>TOTAL DE ÁRVORES SALVAS</ThreeText>
        <NumberOfThreesText>289</NumberOfThreesText>
      </ThreeContainer>
    </Container>
  );
}
