import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import logoImage from '../../assets/logo.png';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreatePress = () => {
    navigation.navigate('Create');
  };

  const handleLoginPress = () => {};

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View>
        <Image style={styles.image} source={logoImage} />
      </View>

      <View>
        <TextInput
          //value={email}
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          placeholderTextColor="gray"
          returnKeyType={'next'}
          onSubmitEditing={() => {
            this.passwordTextInput.focus();
          }}
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          //value={ password }
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor="gray"
          //ref={(input) => { this.passwordTextInput = input; }}
          //returnKeyType = { "next" }
          onChangeText={text => setPassword(text)}
          value={password}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLoginPress()}>
          <Text style={styles.buttonText}>Pronto!</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Esqueci minha senha!</Text>

        <Text style={styles.text}>
          Ainda não tem conta?
          <Text style={styles.greenText} onPress={handleCreatePress}>
            Criar
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  image: {
    maxHeight: 200,
    maxWidth: 450,
    marginBottom: 50,
    justifyContent: 'flex-start',
  },

  input: {
    backgroundColor: '#F5EEF5',
    borderRadius: 30,
    paddingLeft: 20,
    minWidth: 350,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontFamily: 'Roboto',
    fontSize: 16,
  },

  background: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 30,
    backgroundColor: '#0EB161',
    minWidth: 350,
    textAlign: 'center',
    minHeight: 50,
    alignItems: 'center',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    fontFamily: 'Roboto',
  },

  buttonText: {
    color: 'white',
    paddingTop: 13,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },

  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    color: '#757575',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 140,
  },

  greenText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 21,
    color: '#0EB161',
    alignSelf: 'center',
    marginTop: 50,
  },
});
