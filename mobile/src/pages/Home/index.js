import React from 'react';
import { ScrollView, View } from 'react-native';

import PageHeader from '../../components/PageHeader/index.js';
import CollectItem from '../../components/CollectItem/index.js';
import DicasItem from '../../components/DicasItem/index.js';

//import {StyledContainer, StyledText, ScrollItem } from './styles';
import styles from './estilo';

export default function Home(props) {
  return (
     <View >
        <PageHeader />
        <ScrollView style={styles.scrollItem}>
          <DicasItem />
        </ScrollView>
        
     </View>
    
  );
}
