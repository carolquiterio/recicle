import React from 'react';
import {Image, View} from 'react-native';

import logoImg from '../../assets/logoBranco.png';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  LogoContainerMenu,
  WelcomeText,
  ReadyButton1,
  ReadyButton2,
  ButtonText1,
  ButtonText2,
} from './styles';

const Welcome = () => {
  return (
    <Container>
      <LogoContainerMenu>
        <Image source={logoImg} />
      </LogoContainerMenu>
      <WelcomeText>Bem vindo (a)</WelcomeText>
      <MaterialCommunityIcon name="tree" color="#fff" size={200} />
      <ReadyButton1>
        <ButtonText1>Entrar</ButtonText1>
      </ReadyButton1>

      <ReadyButton2>
        <ButtonText2>Criar conta</ButtonText2>
      </ReadyButton2>
    </Container>
  );
};

export default Welcome;
