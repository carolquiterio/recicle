import React from 'react';
import { View, Text, KeyboardAvoidingView, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import logoImage from '../../assets/logo.png';


export default function Login() {
    return(
        
        <KeyboardAvoidingView style={styles.background}>
        <View>
            <Image style={styles.image} source={logoImage}/>       
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

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Pronto!</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Esqueci minha senha!</Text>
                
                <Text style={styles.text}>Ainda não tem conta? <Text style={styles.greenText}>Criar</Text></Text>
            </View>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({  
    
    image: {
        maxHeight: 200,
        maxWidth: 450,
        marginBottom: 50, 
        justifyContent: 'flex-start'
    },

    input: {  
        backgroundColor: '#F5EEF5',
        borderRadius: 30,
        paddingLeft: 20,
        minWidth:350,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        fontFamily: 'Roboto',
        fontSize: 16
    },

    background: {
        flex: 0,
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
        fontWeight: '500',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        fontFamily: 'Roboto'
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
        marginBottom: 140
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
    }
  });
  