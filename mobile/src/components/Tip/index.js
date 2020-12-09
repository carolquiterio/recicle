import React from 'react';
import {Image} from 'react-native';

import {Container, Title, Row, Img} from './styles';

const Tip = props => {
  return (
    <Container>
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
