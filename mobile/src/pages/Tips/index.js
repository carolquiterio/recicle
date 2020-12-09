import React from 'react';
import {ScrollView} from 'react-native';

import {Container, RowDiv, Title} from './styles';
import Tip from '../../components/Tip';
import {useNavigation} from '@react-navigation/core';

const Tips = () => {
  const navigation = useNavigation();

  function handleTipPress() {
    navigation.navigate('TipsDetails');
  }
  return (
    <Container>
      <Title>Confira as dicas da comunidade!</Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RowDiv>
          <Tip
            img="https://viverdeartesanato.com/wp-content/uploads/2015/07/DSC01966-1.jpg"
            title="Pote"
          />
          <Tip
            img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-008.jpg"
            title="Porta acessórios"
          />
        </RowDiv>
        <RowDiv>
          <Tip
            img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-001.jpg"
            title="Porta objetos"
          />
          <Tip
            img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-011.jpg"
            title="Vaso para plantas"
          />
        </RowDiv>

        <RowDiv>
          <Tip
            img="https://i.pinimg.com/564x/f0/f7/6f/f0f76f5f33b8d7c221eaca954bcc98a2.jpg"
            title="Potes sorvetes"
          />

          <Tip
            img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-009.jpg"
            title="cd"
          />
        </RowDiv>

        <RowDiv>
          <Tip
            img="http://viverdeartesanato.com/wp-content/uploads/2015/07/acer.jpg"
            title="Potes de iogurte"
          />
          <Tip
            img="https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2018/07/lixeiras-de-coleta-seletiva-larplasticos.jpg?fit=700%2C420&ssl=1"
            title="Potinhos para doces de festas"
          />
        </RowDiv>
      </ScrollView>
    </Container>
  );
};

export default Tips;
