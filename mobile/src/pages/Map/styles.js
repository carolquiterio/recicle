import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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