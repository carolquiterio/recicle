import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #34cb79;
`;

export const LogoContainerMenu = styled.View`
  justify-content: center;
  align-items: center;
  transform: scale(0.15);
  margin-bottom: -100px;
  margin-top: -100px;
`;

export const WelcomeText = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1c7e49;
`;

export const ReadyButton1 = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: #fff;
  text-align: center;
  height: 42px;
  font-weight: 500;
  justify-content: center;
  width: 90%;
  margin-bottom: 10px;
`;

export const ButtonText1 = styled.Text`
  color: #1c7e49;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
`;

export const ReadyButton2 = styled.TouchableOpacity`
  border-radius: 12px;
  background-color: #1c7e49;
  text-align: center;
  height: 42px;
  font-weight: 500;
  justify-content: center;
  width: 90%;
`;

export const ButtonText2 = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 900;
`;
