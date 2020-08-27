import styled, {css} from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f5eef5;
  height: 50px;
`;

export const IconContainerMenu = styled.TouchableOpacity`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;
export const LogoContainerMenu = styled.View`
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
  transform: scale(0.12);
`;

export const ImageLogo = styled.Image`
  width: 100%;
`;
