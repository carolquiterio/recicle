import React from 'react';
import {ScrollView, View} from 'react-native';

import Grafic from '../../components/Grafic';

import {
  StyledContainer,
  Title,
  GraficContainer,
  StyledButton,
  ButtonContainer,
  StyledText,
  StyledWhite,
  StyledView,
  ButtonCategorie,
} from './styles';

export default function Home(props) {
  return (
    <StyledView>
      <StyledContainer>
        <ButtonContainer>
          <StyledButton>
            <StyledText>Dia</StyledText>
          </StyledButton>

          <StyledWhite>
            <StyledText>Mes</StyledText>
          </StyledWhite>
        </ButtonContainer>
        <Title>Seu progresso</Title>
        <GraficContainer>
          <Grafic />
        </GraficContainer>
        <ButtonCategorie></ButtonCategorie>
      </StyledContainer>
    </StyledView>
  );
}
