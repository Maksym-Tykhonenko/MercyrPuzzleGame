import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LvlSelectionScreen from './screens/LvlSelectionScreen';
import RulseScreen from './screens/RulseScreen';
import LvlFirstMarcyry from './screens/LvlFirstMarcyry';
import LvlSecondVenus from './screens/LvlSecondVenus';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlSelection"
          component={LvlSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rulse"
          component={RulseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlFirstMarcyry"
          component={LvlFirstMarcyry}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LvlSecondVenus"
          component={LvlSecondVenus}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
