import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton }  from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/icons/back.png';

import styles from './styles';

function PageHeader(){
  const { navigate } = useNavigation()
  
  function handlerGoBack(){
    navigate('Login');
  }
  
  return(
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <Image source={backIcon} resizeMode="contain"/> 
        </BorderlessButton>
      </View>
    </View>
  )
}

export default PageHeader;