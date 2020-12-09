import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Grafic from '../../components/Grafic';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  StyledContainer,
  Title,
  GraficContainer,
  StyledButton,
  ButtonContainer,
  StyledText,
  StyledWhite,
  StyledView,
  ButtonCategorie,
  CategoryText,
  Plus,
  ImageContainer,
} from './styles';
import img from '../../assets/foto1.png';
export default function Home(props) {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <StyledView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageContainer>
              <Image source={img} />
            </ImageContainer>
            <Text style={styles.modalText}>Você reciclou plástico!</Text>
            <Text style={styles.modalDescription}>
              No dia 23/10 você ecnomizou 40kg de gás carbônico.
            </Text>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#34cb79'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Ver detalhes</Text>
            </TouchableHighlight>
            <Text
              onPress={() => {
                setModalVisible(false);
              }}
              style={{
                ...styles.modalText,
                color: '#5d5d5d',
                fontFamily: 'Ubuntu-Medium',
              }}>
              Agora não
            </Text>
          </View>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StyledContainer>
          <ButtonContainer>
            <StyledButton>
              <StyledText>Dia</StyledText>
            </StyledButton>

            <StyledWhite>
              <StyledText>Mes</StyledText>
            </StyledWhite>
          </ButtonContainer>
          <Title>Seu progresso</Title>
          <GraficContainer>
            <Grafic />
          </GraficContainer>
          <Title>Categorias</Title>
          <ButtonCategorie
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcon
              name="credit-card"
              size={22}
              color="#F3D742"></MaterialIcon>
            <CategoryText>Plástico</CategoryText>
            <Plus>
              <MaterialIcon
                name="plus"
                size={30}
                color="#787878"></MaterialIcon>
            </Plus>
          </ButtonCategorie>
          <ButtonCategorie
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcon
              name="cup-outline"
              size={22}
              color="#FC2929"></MaterialIcon>
            <CategoryText>Vidro {'    '}</CategoryText>
            <Plus>
              <MaterialIcon
                name="plus"
                size={30}
                color="#787878"></MaterialIcon>
            </Plus>
          </ButtonCategorie>
          <ButtonCategorie
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcon
              name="bottle-soda"
              size={30}
              color="#4D73F8"></MaterialIcon>
            <CategoryText>Metal {'  '}</CategoryText>
            <Plus>
              <MaterialIcon
                name="plus"
                size={30}
                color="#787878"></MaterialIcon>
            </Plus>
          </ButtonCategorie>
          <ButtonCategorie
            onPress={() => {
              setModalVisible(true);
            }}>
            <MaterialIcon
              name="content-copy"
              size={23}
              color="#34cb79"></MaterialIcon>
            <CategoryText>Papel {'   '}</CategoryText>
            <Plus>
              <MaterialIcon
                name="plus"
                size={30}
                color="#787878"></MaterialIcon>
            </Plus>
          </ButtonCategorie>
        </StyledContainer>
      </ScrollView>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: 350,
    width: '75%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: -10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: '96%',
    height: 40,
    backgroundColor: '#03A700',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginBottom: 10,
    marginTop: -30,
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Medium',
  },
  modalText: {
    fontSize: 18,
    color: '#231F20',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    paddingBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#5D5D5D',
    textAlign: 'center',
    height: '28%',
    fontFamily: 'Ubuntu-Regular',
  },
});
