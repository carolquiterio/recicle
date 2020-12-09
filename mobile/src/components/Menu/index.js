import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  LogoContainerMenu,
  IconContainerMenu,
  ImageLogo,
} from './styles';

import LogoImg from '../../assets/logoo.png';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <IconContainerMenu>
        <FeatherIcon
          name="user"
          color="#34cb79"
          onPress={() => navigation.navigate('ProfileStackScreen')}
          size={40}
          iconStyle={{margin: 100}}
        />
      </IconContainerMenu>
      <LogoContainerMenu>
        <Image source={LogoImg} />
      </LogoContainerMenu>

      <IconContainerMenu>
        <FeatherIcon
          name="plus"
          color="#34cb79"
          onPress={() => navigation.navigate('CreateNewCollect')}
          size={40}
        />
      </IconContainerMenu>
    </Container>
  );
};

export default Menu;
