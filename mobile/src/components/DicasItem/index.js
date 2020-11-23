import React from  'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from '../DicasItem/styles';

function DicasItem() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}> 
          <Image style={styles.img}  source={{ uri: 'https://lh3.googleusercontent.com/proxy/YVP_Kx2azSrCCeeQlfsHX17Ew-VRBYYjFbpVYp-dhpGMRpz6h0Tg_OQIWaI204to8BPrHHKg8LPCLCAKQFIrcxaYtjJnAXlPLoySZ2NFSSpiEJaqKT-b2OCiIlG7eTtKu5to4cv7Y9MlqEsVoZ5qap-sGw'}}/>
        </View>

        <View style={styles.infoDica}>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginLeft: 10}}>Garrafa pet</Text>
         
          <Text style={{fontSize: 18, fontWeight: '500', color: '#34CB79', margin: 5, marginLeft: 10}}>Residuos Eletronicos, Lampadas</Text>
          
          <Text style={{
            fontSize: 16, 
            marginBottom: 5, 
            color: '#545454',
            padding: 10
             }}>
            Rio do Sul, Santa Catarina Guilherme Gemballa, Jardim América Rio do Sul 
          </Text>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, padding: 10}}>
          <RectButton style={{
            backgroundColor: '#34cb79',
            width: 120, 
            height: 45,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 50,
            }}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500' }}>
              Acessar
            </Text>
          </RectButton>

          <RectButton style={{
            backgroundColor: '#34cb79',
            width: 120, 
            height: 45,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 8}}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '500' }}>
              Salvar
            </Text>
          </RectButton>
          </View>
      </View>
    )
}

export default DicasItem;