import React from 'react';
import {Image} from 'react-native';

import {Container, Title, Row, Img} from './styles';
import {useNavigation} from '@react-navigation/core';

const Tip = props => {
  const navigation = useNavigation();

  function handleTipPress() {
    navigation.navigate('TipsDetails');
  }
  return (
    <Container onPress={handleTipPress}>
      <Img
        source={{
          uri: props.img,
        }}
      />
      <Row>
        <Title>{props.title}</Title>
      </Row>
    </Container>
  );
};

export default Tip;
