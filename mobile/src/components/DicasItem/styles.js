import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container:{
     backgroundColor: '#fff',
     borderWidth: 1,
     borderColor: '#e6e6f0',
     borderRadius: 30,
    // marginBottom: 16,
    // overflow: 'hidden'
   },
   profile: {
     flexDirection: 'row',
     alignItems: 'center',
     padding: 20,
   },
   img: {
    width: 200,
    height: 230,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 60
   },
   infoDica: {
     marginLeft: 20,
     marginRight: 10,
   },

});

export default styles;