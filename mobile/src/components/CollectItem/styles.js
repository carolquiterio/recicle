import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container:{
     backgroundColor: '#fff',
     borderWidth: 1,
     borderColor: '#e6e6f0',
     borderRadius: 30,
     marginBottom: 16,
     overflow: 'hidden'
   },
   profile: {
     flexDirection: 'row',
     alignItems: 'center',
     padding: 20,
   },
   img: {
    width: 350,
    height: 220,
    backgroundColor: '#fff'
   },
   infoColeta: {
     marginLeft: 20,
   },
   title: {
     fontWeight: 'bold',
     fontSize: 25,
     marginBottom: 10
   },
   subTitle: {
     fontSize: 18,
     color: '#34CB79',
     marginBottom: 10,
   },
   description: {
      fontSize: 12,
      color: '#545454',
      marginBottom: 4,
   },
   endereco: {
     marginBottom: 10,
     fontWeight: 'bold',
   },
   descriptionEndereco: {
      marginBottom: 2
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
     marginLeft: 10
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
    marginLeft: 10
  },

});

export default styles;