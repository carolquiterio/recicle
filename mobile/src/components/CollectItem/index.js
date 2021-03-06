import React from 'react';
import {View, Image, Text, Linking} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

import styles, {StyledRowContainer, StyledGoBack} from './styles';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import emailIcon from '../../assets/icons/mail-white.png';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function CollectItem(props) {
  const navigation = useNavigation();
  function handleWhatsPress() {
    Linking.openURL('sms:789456123');
  }

  function handleEmailPress() {
    Linking.openURL('mailto:ong@gmail.org');
  }
  function handleGoBackPress() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledRowContainer>
          <AntDesignIcon
            name="arrowleft"
            size={25}
            color="#34cb79"
            onPress={handleGoBackPress}
          />
          <StyledGoBack> Voltar</StyledGoBack>
        </StyledRowContainer>
        <View style={styles.profile}>
          <Image
            style={styles.img}
            source={{
              uri:
                'https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2018/07/lixeiras-de-coleta-seletiva-larplasticos.jpg?fit=700%2C420&ssl=1',
            }}
          />
        </View>
        <View style={styles.infoColeta}>
          <Text style={styles.title}>{props.collectName}</Text>
          <Text style={styles.subTitle}>{props.items}</Text>
          <Text style={styles.description}>{props.description}</Text>
          <Text style={styles.endereco}>
            Endereço {'\n'}
            <Text style={styles.descriptionEndereco}>{props.place}</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <RectButton style={styles.whatsButton} onPress={handleWhatsPress}>
            <Image source={whatsappIcon} />
            <Text style={styles.whatsButtonText}>Whatsapp</Text>
          </RectButton>

          <RectButton style={styles.emailButton} onPress={handleEmailPress}>
            <Image source={emailIcon} />
            <Text style={styles.emailButtonText}>E-mail</Text>
          </RectButton>
        </View>
      </ScrollView>
    </View>
  );
}

export default CollectItem;
