import React, {Component} from 'react';
import {View, Text, TextInput, Alert, ScrollView} from 'react-native';
import {
  ArvoreContainer,
  StyledContainer,
  ContainerTip,
  StyledText,
  StyledText1,
  StyledTextBoton,
  StyledTextBoton2,
  ReadyButton,
  ReadyButton2,
  StyledInput,
  ButtonText,
  ReadyButtonTip,
  ReadyButtonTip2,
  StyledTextInput,
  StyledTextInput1,
  StyledTextInput2,
  ButtonContainer,
  StyledWhite,
  StyledTextFirst,
  Cont,
  StyledButton,
  StyledRowContainer,
} from './style';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
export default function CreateNewCollect() {
  const navigation = useNavigation();

  function handleGoBackPress() {
    navigation.goBack();
  }
  return (
    <Cont>
      <ScrollView>
        <ArvoreContainer>
          <StyledRowContainer>
            <AntDesignIcon
              name="arrowleft"
              size={25}
              color="#fff"
              onPress={handleGoBackPress}
            />
          </StyledRowContainer>
        </ArvoreContainer>
        <ContainerTip>
          <ReadyButtonTip>
            <StyledText>Cadastrar dicas</StyledText>
          </ReadyButtonTip>
          <ReadyButtonTip2>
            <StyledText1>Pontos de coletas</StyledText1>
          </ReadyButtonTip2>
        </ContainerTip>
        <StyledContainer>
          <View>
            <View style={{top: -120}}>
              <StyledTextBoton>Nome</StyledTextBoton>
              <StyledInput
                //value={email
                placeholder="Ex: Ecoleta"
                autoCorrect={false}
                placeholderTextColor="gray"
                returnKeyType={'next'}
                autoCapitalize="none"
                onSubmitEditing={() => {
                  this.passwordTextInput.focus();
                }}
                onChangeText={text => setEmail(text)}
              />
              <StyledTextBoton>Endereço</StyledTextBoton>
              <StyledInput
                //value={email}
                placeholder="Ex: Rua São Martins - 667"
                autoCorrect={false}
                placeholderTextColor="gray"
                returnKeyType={'next'}
                autoCapitalize="none"
                onSubmitEditing={() => {
                  this.passwordTextInput.focus();
                }}
                onChangeText={text => setEmail(text)}
              />
              <StyledTextBoton>Telefone</StyledTextBoton>
              <StyledInput
                //value={email}
                placeholder="Ex: 19988978979"
                autoCorrect={false}
                placeholderTextColor="gray"
                returnKeyType={'next'}
                autoCapitalize="none"
                onSubmitEditing={() => {
                  this.passwordTextInput.focus();
                }}
                onChangeText={text => setEmail(text)}
              />
              <StyledTextBoton>Email</StyledTextBoton>
              <StyledInput
                //value={email}
                placeholder="Ex: ecoleta@emai.com"
                autoCorrect={false}
                placeholderTextColor="gray"
                returnKeyType={'next'}
                autoCapitalize="none"
                onSubmitEditing={() => {
                  this.passwordTextInput.focus();
                }}
                onChangeText={text => setEmail(text)}
              />
            </View>

            <StyledTextBoton>Categoria</StyledTextBoton>
            <ReadyButton
              onPress={() => Alert.alert('Categoria', 'escolher categoria')}>
              <ButtonText>Adicionar</ButtonText>
            </ReadyButton>
            <StyledTextBoton2>Foto/Video</StyledTextBoton2>

            <View style={{top: -40}}>
              <ReadyButton2
                onPress={() =>
                  Alert.alert('Uhull!', 'Dica cadastrada com sucesso!!')
                }>
                <ButtonText>Cadastrar</ButtonText>
              </ReadyButton2>
            </View>
          </View>
        </StyledContainer>
      </ScrollView>
    </Cont>
  );
}
