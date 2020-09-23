import React from  'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import emailIcon from '../../assets/icons/mail-white.png';

function CollectItem() {
    return (
      <View style={styles.container}>
          <View style={styles.profile}>
            <Image
             style={styles.img}
             source={{ uri: 'https://i0.wp.com/www.larplasticos.com.br/wp-content/uploads/2018/07/lixeiras-de-coleta-seletiva-larplasticos.jpg?fit=700%2C420&ssl=1'}}
            />
          </View>

            <View style={styles.infoColeta}>
              <Text style={styles.title}>Colectoria</Text>
              <Text style={styles.subTitle}>Resíduos Eletrônicos, Lâmpadas, Pilhas e Baterias</Text>
              <Text style={styles.description}>Rio do Sul, santa catarina </Text>
              <Text style={styles.endereco}>
                  Endereço {'\n'}
                 
                  <Text style={styles.descriptionEndereco}>Rua fulano de tal</Text>
              </Text>
            </View>
              
            <View style={styles.buttonsContainer}>
              <RectButton style={styles.whatsButton}>
                <Image source={whatsappIcon}/>
                <Text style={styles.whatsButtonText}>Whatsapp</Text>
              </RectButton>

              <RectButton style={styles.emailButton}>
                <Image source={emailIcon}/>
                <Text style={styles.emailButtonText}>E-mail</Text>
              </RectButton>
            </View>
      </View>
    )
}

export default CollectItem;