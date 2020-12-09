import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },
  flechaVoltar: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 20,
    bottom: 50,

    elevation: 10,
  },
  back: {
    width: 56,
    height: 56,
    backgroundColor: '#FAFAFA',
    borderRadius: 28,

    justifyContent: 'center',
    alignItems: 'center',

    //opacity: 0.2,
  },
});

export default styles;

export const Title = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 28px;
  color: #1c7e49;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export const Container = styled.View`
  flex: 1;
`;
