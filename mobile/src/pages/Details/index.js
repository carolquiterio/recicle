import React from 'react';
import {View, Text, Image} from 'react-native';
import ImageLixo from '../../assets/lixo.png';
import ImageUm from '../../assets/foto1.png';
import ImageDois from '../../assets/foto2.png';
import ImageTres from '../../assets/foto3.png';
import ImageQuatro from '../../assets/foto4.png';
import {useNavigation} from '@react-navigation/native';
import Tip from '../../components/Tip';

import {
  StyledContainer,
  StyledText,
  StyledText1,
  StyledText2,
  StyledText3,
  StyledText4,
  ContainerLixo,
  ContainerFotoUm,
  ArvoreContainer,
  ArvoreContainer1,
  ArvoreContainer2,
  ArvoreContainer3,
  ArvoreContainer4,
  ArvoreContainer5,
  ArvoreContainer6,
  ArvoreContainer7,
  StyledGoBack,
  StyledRowContainer,
} from './styles';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

export default function Details() {
  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }
  return (
    <StyledContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledRowContainer>
          <AntDesignIcon
            name="arrowleft"
            size={25}
            color="#34cb79"
            onPress={handleGoBackPress}
          />
          <StyledGoBack> Voltar</StyledGoBack>
        </StyledRowContainer>
        <View>
          <ContainerLixo>
            <Image source={ImageLixo} />
          </ContainerLixo>

          <StyledText>
            <Text>Você acaba de concluir 35% da sua meta!</Text>
          </StyledText>

          <StyledText1>
            <Text>
              O plástico demora 12819 de anos para se decompor no meio ambiente.
              Reutiliza-lo pode causar um impacto de....
            </Text>
          </StyledText1>

          <StyledText2>
            <Text>
              Confira algumas dicas de <StyledText3>reutilização</StyledText3> e{' '}
              <StyledText3>reciclagem</StyledText3> do pastico
            </Text>
          </StyledText2>

          <StyledText4>
            <Text>
              Confira alguns pontos de <StyledText3>coleta</StyledText3> de
              plástico
            </Text>
          </StyledText4>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tip
              img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-001.jpg"
              title="Porta objetos"
            />
            <Tip
              img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-011.jpg"
              title="Vaso para plantas"
            />

            <Tip
              img="https://i.pinimg.com/564x/f0/f7/6f/f0f76f5f33b8d7c221eaca954bcc98a2.jpg"
              title="Potes sorvetes"
            />

            <Tip
              img="https://www.artesanatoereciclagem.com.br/wp-content/uploads/2015/02/Reciclando-potes-pl%C3%A1sticos-009.jpg"
              title="cd"
            />

            <Tip
              img="http://viverdeartesanato.com/wp-content/uploads/2015/07/acer.jpg"
              title="Potes de iogurte"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </StyledContainer>
  );
}
