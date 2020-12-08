import React from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import BackIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

function PageHeader() {
  const {navigate} = useNavigation();

  function handlerGoBack() {
    navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handlerGoBack}>
          <BackIcon
            style={styles.flecha}
            name="arrowleft"
            size={25}
            color="#FFFFFF"
          />
        </BorderlessButton>
      </View>
    </View>
  );
}

export default PageHeader;
