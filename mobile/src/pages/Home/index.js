import React from 'react';
import {ScrollView, View} from 'react-native';

import Grafic from '../../components/Grafic';

import {StyledContainer, Title, GraficContainer} from './styles';

export default function Home(props) {
  return (
    <View>
      <StyledContainer>
        <Title>Seu progresso</Title>
        <GraficContainer>
          <Grafic />
        </GraficContainer>
      </StyledContainer>
    </View>
  );
}
