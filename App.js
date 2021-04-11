
import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/Main';
import Card from './src/pages/Card';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>

        <AppStack.Screen name='Main' component={Main} />
        <AppStack.Screen name='Card' component={Card} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
