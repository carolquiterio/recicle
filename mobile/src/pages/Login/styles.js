import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BackImage = styled(Image)`
  transform: scale(0.1);
`;

export const StyledInput = styled.TextInput`
  background-color: #f5eef5;
  border-radius: 30px;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 14px;
  height: 42px;
`;

export const ReadyButton = styled.TouchableOpacity`
  border-radius: 30px;
  background-color: #34cb79;
  text-align: center;
  height: 42px;
  font-weight: 500;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #757575;
  align-self: center;
  justify-content: flex-end;
`;
export const StyledPasswordText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #757575;
  align-self: center;
  margin-top: 10px;
`;

export const StyledGreenText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #34cb79;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 140px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const CreateAccountContainer = styled.View`
  justify-content: flex-end;
`;
