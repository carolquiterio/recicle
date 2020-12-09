import styled from 'styled-components';
import {Image} from 'react-native';

export const Container = styled.TouchableOpacity`
  background-color: #fff;
  width: 170px;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const Row = styled.View`
  background-color: #fff;
  padding: 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  width: 170px;
  height: 28px;
`;

export const Title = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  color: #545454;
  margin-left: 10px;
`;

export const Img = styled(Image)`
  width: 170;
  height: 150;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
