import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  LogoContainerMenu,
  IconContainerMenu,
  ImageLogo,
} from './styles';

import LogoImg from '../../assets/logoo.png';
//import LogoWhite from '../../assets/logoBranco.png';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainerMenu>
        <Icon
          name="user"
          color="#34cb79"
          onPress={() => navigation.navigate('Create')}
          size={40}
        />
      </IconContainerMenu>
      <LogoContainerMenu>
        <Image source={LogoImg} />
      </LogoContainerMenu>

      <IconContainerMenu>
        <Icon
          name="plus"
          color="#34cb79"
          onPress={() => navigation.navigate('Create')}
          size={40}
        />
      </IconContainerMenu>
    </Container>
  );
};

export default Menu;
