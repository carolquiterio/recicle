import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  flex: 1;

  justify-content: center;
`;

export const StyledView = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

export const StyledText = styled.Text`
  font-size: 20px;
`;

/*export const ScrollItem = styled.ScrollView`
   margin-top: -60,
`;*/

export const Title = styled.Text`
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */
  color: #363636;
  margin-bottom: 5px;
`;

export const GraficContainer = styled.View`
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 22px;
`;

export const ButtonContainer = styled.View`
  background: #fff;
  border-radius: 30px;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 18px;
  height: 40px;
`;

export const StyledButton = styled.TouchableOpacity`
  background: #34cb79;
  border-radius: 30px;
  width: 50%;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const StyledWhite = styled.TouchableOpacity`
  background: #fff;
  border-radius: 30px;
  width: 50%;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;

  text-align: center;

  color: #ffffff;
`;

export const ButtonCategorie = styled.TouchableOpacity`
  background: #f9f9f9;
  border-radius: 10px;
  align-items: center;

  height: 45px;
  flex-direction: row;
  padding-right: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const CategoryText = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  /* identical to box height */

  color: #363636;
  margin-left: 2px;
`;

export const Plus = styled.View`
  margin-left: 220px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 14px;
`;
