import React from 'react';
import {ScrollView} from 'react-native';

import {Container, RowDiv, Title} from './styles';
import Tip from '../../components/Tip';

const Tips = () => {
  return (
    <Container>
      <Title>Confira as dicas da comunidade!</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RowDiv>
          <Tip
            img="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2018/07/lixeiras-de-coleta-seletiva-larplasticos.jpg?fit=700%2C420&ssl=1"
            title="Pote"
          />
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
