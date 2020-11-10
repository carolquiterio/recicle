import React from 'react';
import {ScrollView} from 'react-native';

import {Container, RowDiv} from './styles';
import Tip from '../../components/Tip';

const Tips = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RowDiv>
          <Tip />
          <Tip />
        </RowDiv>
        <RowDiv>
          <Tip />
          <Tip />
        </RowDiv>
        <RowDiv>
          <Tip />
          <Tip />
        </RowDiv>
        <RowDiv>
          <Tip />
          <Tip />
        </RowDiv>
        <RowDiv>
          <Tip />
          <Tip />
        </RowDiv>
      </ScrollView>
    </Container>
  );
};

export default Tips;
