import React from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import logoImage from '../../assets/logo.png';


export default function Login() {
    return(
        <KeyboardAvoidingView style={styles.background}>
            <View>
                
            </View>  

            <View>
                <TextInput
                    //value={email}
                    style={ styles.input }
                    placeholder="Email"
                    autoCorrect={false}
                    placeholderTextColor="gray"    
                    //returnKeyType = { "next" }
                    //onSubmitEditing={() => { this.passwordTextInput.focus(); }}
                />

                <TextInput 
                    //value={ password }
                    style={ styles.input }
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor="gray"           
                    //ref={(input) => { this.passwordTextInput = input; }} 
                    //returnKeyType = { "next" }
                />

                <TouchableOpacity
                style={styles.button}>
                    <Text style={styles.buttonText}>Pronto!</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({  
    
    image: {
        maxHeight: 230,
        maxWidth: 450
    },

    input: {
        backgroundColor: '#F5EEF5',
        borderRadius: 30,
        paddingLeft: 20,
        minWidth:350,
        marginBottom: 20
    },

    background: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },

    button: {
        borderRadius: 30,
        backgroundColor: '#0EB161',
        minWidth:350,
        textAlign: 'center',
        minHeight: 50,
        alignItems: 'center',
        fontWeight: '500'
    },

    buttonText: {
        color: 'white',
        paddingTop: 13,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
  });
  