import React from 'react';
import {View, Text, Image} from 'react-native';
import ImageLixo from '../../assets/lixo.png';
import ImageUm from '../../assets/foto1.png';
import ImageDois from '../../assets/foto2.png';
import ImageTres from '../../assets/foto3.png';
import ImageQuatro from '../../assets/foto4.png';

import {StyledContainer, 
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
        ArvoreContainer7
}from './styles';

export default function Profile() {
  return (
    <StyledContainer>
    <View> 

      <ContainerLixo>
        <Image source={ImageLixo} />
      </ContainerLixo>

      <StyledText>
        <Text>Você acaba de concluir 35% da sua meta!</Text>
      </StyledText>

      <StyledText1>
        <Text>O plástico demora 12819 de anos para se decompor no meio ambiente.
Reutiliza-lo pode causar um impacto de....</Text>
      </StyledText1>

      <StyledText2>
        <Text>Confira algumas dicas de <StyledText3>reutilização</StyledText3> e <StyledText3>reciclagem</StyledText3> do pastico</Text>
      </StyledText2>

      <StyledText4>
        <Text>Confira alguns pontos de <StyledText3>coleta</StyledText3> de plástico</Text>
      </StyledText4>

    <ArvoreContainer>
      <View>
        <StyledText>
        <Image source={ImageUm} />
        </StyledText>  
      </View>
    </ArvoreContainer>
 
    <ArvoreContainer1>
      <View>
        <ContainerFotoUm>
        <Image source={ImageDois} />
        </ContainerFotoUm>  
        <StyledText>
          
        </StyledText>
      </View>
      </ArvoreContainer1>

      <ArvoreContainer2>
      <View>
        <StyledText>
        <Image source={ImageTres} />
        </StyledText>  
      </View>
      </ArvoreContainer2>

      <ArvoreContainer3>
      <View>
        <StyledText>
        <Image source={ImageQuatro} />
        </StyledText>  
      </View>
      </ArvoreContainer3>

      <ArvoreContainer4>
      <View>
        <StyledText>
        <Image source={ImageQuatro} />
        </StyledText>  
      </View>
      </ArvoreContainer4>

      <ArvoreContainer5>
        <View>
          <StyledText>
            <Image source={ImageQuatro}/>
          </StyledText>
        </View>
      </ArvoreContainer5>

      <ArvoreContainer6>
        <View>
          <StyledText>
            <Image source={ImageQuatro}/>
          </StyledText>
        </View>
      </ArvoreContainer6>

      <ArvoreContainer7>
        <View>
          <StyledText>
            <Image source={ImageQuatro}/>
          </StyledText>
        </View>
      </ArvoreContainer7>

      </View>
    </StyledContainer>
  );
}
