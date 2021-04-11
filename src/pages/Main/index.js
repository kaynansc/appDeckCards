import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { } from '@react-navigation/native';

import { Container, ContainerCards } from './styles';

import CardDeck from '../../components/CardDeck';

function Main() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#303030' }}>
      <Container>
        <ScrollView>
          <ContainerCards>
            <CardDeck typeCard='Frente'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
            <CardDeck typeCard='Verso'/>
          </ContainerCards>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

export default Main;