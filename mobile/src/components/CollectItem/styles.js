import {StyleSheet} from 'react-native';
import styled from 'styled-components';

const styles = StyleSheet.create({
  container: {},
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 350,
    height: 220,
    backgroundColor: '#fff',
  },
  infoColeta: {
    marginLeft: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: '#34CB79',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#545454',
    marginBottom: 4,
  },
  endereco: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionEndereco: {
    marginBottom: 2,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    padding: 45,
  },

  whatsButton: {
    backgroundColor: '#34CB79',
    width: 137,
    height: 45,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  whatsButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },

  emailButton: {
    backgroundColor: '#34CB79',
    width: 137,
    height: 45,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  emailButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;

export const StyledRowContainer = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-top: 40px;
`;

export const StyledGoBack = styled.Text`
  font-size: 22px;
  color: #34cb79;
  font-family: 'Ubuntu-Regular';
  letter-spacing: -0.333333px;
`;
