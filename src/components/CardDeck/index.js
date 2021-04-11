import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import imageCardVerso from '../../assets/CardVerso.png';
import imageCardFrente from '../../assets/CardFrente.png';

import { Container, Card } from './styles';

function CardDeck({ typeCard }) {
  const navigation = useNavigation();

  function handleGoToCard() {
    if (typeCard == 'Frente') {
      navigation.navigate('Card');
    }
  }

  return (
    <Container>
      <TouchableOpacity TouchableOpacity={0.6} onPress={handleGoToCard}>
        <Card source={typeCard == 'Frente' ? imageCardFrente : imageCardVerso} />
      </TouchableOpacity>
    </Container>
  );
}

export default CardDeck;