import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  color: #efefef;
  padding: 20px;
`;

export const ThreeText = styled.Text`
  font-size: 21px;
  color: #ffffff;
  font-weight: 500;
`;

export const NameText = styled.Text`
  font-size: 17px;
  color: #3d3d4d;
  align-self: center;
  margin-bottom: 20px;
  margin-top: -68px;
`;

export const ImageLogo = styled(Image)`
  border-radius: 1050px;
  transform: scale(0.07);
`;

export const ImageContainer = styled.View`
  align-items: center;
  height: 50%;
  width: 100%;
  justify-content: center;
`;

export const ThreeContainer = styled.View`
  height: 20%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-color: #34bc79;
`;

export const NumberOfThreesText = styled.Text`
  font-size: 50px;
  color: #ffffff;
  font-weight: 900;
`;
