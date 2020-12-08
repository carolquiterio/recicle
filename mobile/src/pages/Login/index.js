import React, {useState} from 'react';

import {
  BackImage,
  StyledText,
  ButtonText,
  StyledInput,
  Container,
  ReadyButton,
  StyledGreenText,
  InputContainer,
  CreateAccountContainer,
  StyledPasswordText,
  OtherWyasButton,
  FormContainer,
  ButtonsContainer,
} from './styles';

import logoImage from '../../assets/logo.png';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreatePress = () => {
    navigation.navigate('CreateAccount');
  };

  const handleLoginPress = () => {
    navigation.navigate('TabNav');
  };

  return (
    <Container>
      <InputContainer>
        <StyledInput
          //value={email}
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor="gray"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.passwordTextInput.focus();
          }}
          onChangeText={text => setEmail(text)}
          value={email}
          style={shadowStyle}
        />

        <StyledInput
          //value={ password }
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor="gray"
          //ref={(input) => { this.passwordTextInput = input; }}
          //returnKeyType = { "next" }
          onChangeText={text => setPasssword(text)}
          value={password}
          style={shadowStyle}
        />

        <ReadyButton onPress={() => handleLoginPress()} style={shadowStyle}>
          <ButtonText>Pronto!</ButtonText>
        </ReadyButton>

        <StyledPasswordText>Esqueci minha senha!</StyledPasswordText>
        <ButtonsContainer></ButtonsContainer>
        <CreateAccountContainer>
          <StyledText>
            Ainda não tem conta?
            <StyledGreenText onPress={handleCreatePress}>
              {' '}
              Criar
            </StyledGreenText>
          </StyledText>
        </CreateAccountContainer>
      </InputContainer>
    </Container>
  );
}

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
};
/*
<BackImage source={logoImage} />
*/
