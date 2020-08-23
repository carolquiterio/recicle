import React from 'react';
import {View, Text, Image} from 'react-native';
import ImageCarol from '../../assets/carol.jpg';

import {StyledContainer, StyledText, StyledText1, ArvoreContainer, ContainerCarol} from './styles';

export default function Profile() {
  return (
    <StyledContainer>
    <View> 

      <ContainerCarol>
        <Image source={ImageCarol} />
      </ContainerCarol>

      <StyledText1>
        <Text>@Carol_quiterio</Text>
      </StyledText1>

      <ArvoreContainer>
        <StyledText>
          <Text>Você salvou 99 arvores...</Text>
        </StyledText>  
      </ArvoreContainer>

      </View>
    </StyledContainer>
  );
}
