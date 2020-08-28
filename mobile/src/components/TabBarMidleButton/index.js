import React, {useState} from 'react';
import {StyleSheet, View, Button, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/core';
import Camera from '../../pages/Camera';

import {TouchableOpacityy} from './styles';

export default function TabBarMidleButton() {
  const navigation = useNavigation();
  return <TouchableOpacityy onPress={() => navigation.navigate('Camera')} />;
}
