import React, {useState} from 'react';

import {firebase} from '../../firebase/config';

import {KeyBoardAvoidingView} from 'react-native';
import {
  StyledTextInput,
  Container,
  StyledButton,
  ButtonText,
  StyledText,
  StyledGreenText,
} from './styles';

const Create = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    console.log('oi');
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    console.log('oi2');
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate('Home', {user: data});
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <Container>
      <StyledTextInput
        placeholder="Nome"
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
        onChangeText={text => setFullName(text)}
        value={fullName}
      />
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
        onChangeText={text => setEmail(text)}
        value={email}
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
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <StyledTextInput
        placeholder="Confirmação da senha"
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
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />

      <StyledButton>
        <ButtonText onPress={() => onRegisterPress()}>Entrar</ButtonText>
      </StyledButton>

      <StyledText>
        Já tem conta?
        <StyledGreenText onPress={handleLoginPress}>Login</StyledGreenText>
      </StyledText>
    </Container>
  );
};

export default Create;
