import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #34cb79;
  justify-content: flex-end;
`;

export const FormContainer = styled.View`
  padding: 50px 25px 25px 25px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 85%;
`;

export const BackImage = styled(Image)`
  transform: scale(0.1);
`;

export const StyledInput = styled.TextInput`
  background-color: #f5eef5;
  border-radius: 12px;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 14px;
  height: 42px;
`;

export const ReadyButton = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: #34cb79;
  text-align: center;
  height: 42px;
  font-weight: 500;
  justify-content: center;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
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
  font-weight: 500;
  font-size: 18px;
  color: #34cb79;
  align-self: center;
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const CreateAccountContainer = styled.View`
  justify-content: flex-end;
  margin-top: 20%;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`;

export const OtherWyasButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #efeeee;
  border-radius: 8px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  flex-direction: row;
`;
