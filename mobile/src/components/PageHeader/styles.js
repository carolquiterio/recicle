import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
     padding: 30,
     backgroundColor: '#34CB79',
   },

   topBar: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
   },

   header: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between'
   },

   title: {
     color: '#fff',
     fontSize: 24,
     lineHeight: 32,
     maxWidth: 160,
     marginVertical: 40,
   }
});


export default styles;