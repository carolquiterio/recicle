import React, {Component} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
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
} from './styles';

export default function CreateNewTip() {
  return (
    <StyledContainer>
      <View>
        <ArvoreContainer />
        <ContainerTip>
          <ReadyButtonTip>
            <StyledText>Cadastrar dicas</StyledText>
          </ReadyButtonTip>
          <ReadyButtonTip2>
            <StyledText1>Pontos de coletas</StyledText1>
          </ReadyButtonTip2>
        </ContainerTip>

        <View style={{top: -22}}>
          <StyledTextInput>Título</StyledTextInput>
          <StyledInput
            placeholder="Ex: Porta joias de pet"
            autoCorrect={false}
            placeholderTextColor="gray"
            returnKeyType={'next'}
            autoCapitalize="none"
            onSubmitEditing={() => {
              this.passwordTextInput.focus();
            }}
            onChangeText={text => setEmail(text)}
          />

          <StyledTextInput1>SubTítulo</StyledTextInput1>
          <StyledInput
            //value={email}
            placeholder="Ex: Como fazer um porta jóias em casa"
            autoCorrect={false}
            placeholderTextColor="gray"
            returnKeyType={'next'}
            autoCapitalize="none"
            onSubmitEditing={() => {
              this.passwordTextInput.focus();
            }}
            onChangeText={text => setEmail(text)}
          />

          <StyledTextInput2>Descrição</StyledTextInput2>
          <StyledInput
            //value={email
            placeholder="Escreva seu tutorial aqui"
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

        <View style={{top: -40}}>
          <StyledTextBoton>Categoria</StyledTextBoton>
          <ReadyButton
            onPress={() => Alert.alert('Categoria', 'escolher categoria')}>
            <ButtonText>Adicionar</ButtonText>
          </ReadyButton>
          <StyledTextBoton2>Foto/Video</StyledTextBoton2>
        </View>

        <View style={{top: -40}}>
          <ReadyButton2
            onPress={() =>
              Alert.alert('Pronto', 'Dicas cadastrada com sucesso!!')
            }>
            <ButtonText>Cadastrar</ButtonText>
          </ReadyButton2>
        </View>
      </View>
    </StyledContainer>
  );
}
