import React from 'react';
import {ScrollView, View} from 'react-native';

import PageHeader from '../../components/PageHeader/index.js';
import CollectItem from '../../components/CollectItem/index.js';
import Grafic from '../../components/Grafic';

import {StyledContainer, StyledText, ScrollItem} from './styles';
import styles from './estilo';

export default function Home(props) {
  return (
    <View>
      <StyledContainer>
        <Grafic />
      </StyledContainer>
    </View>
  );
}
