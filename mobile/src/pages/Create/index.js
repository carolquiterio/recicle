import React from 'react';
import {KeyBoardAvoidingView} from 'react-native';

import {StyledTextInput, Container, StyledButton, ButtonText} from './styles';

const Create = () => {
  return (
    <Container>
      <StyledTextInput
        placeholder="Email"
        placeholderTextColor="gray"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      />
      <StyledTextInput
        placeholder="Senha"
        placeholderTextColor="gray"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        }}
      />

      <StyledButton>
        <ButtonText>Entrar</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default Create;
