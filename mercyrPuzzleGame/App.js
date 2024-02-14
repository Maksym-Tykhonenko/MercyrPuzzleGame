import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LvlSelectionScreen from './screens/LvlSelectionScreen';
import RulseScreen from './screens/RulseScreen';
// Planets route
import LvlFirstMarcyry from './screens/LvlFirstMarcyry';
import LvlSecondVenus from './screens/LvlSecondVenus';
import LvlSecondEarth from './screens/LvlThirdEarth';
import LvlFourthMars from './screens/LvlFourthMars';
import LvlFifthJupiter from './screens/LvlFifthJupiter';
import LvlSixthSaturn from './screens/LvlSixthSaturn';
import LvlSeventhUran from './screens/LvlSeventhUran';
import LvlEighthNeptun from './screens/LvlEighthNeptun';

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

        <Stack.Screen
          name="LvlSecondEarth"
          component={LvlSecondEarth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LvlFourthMars"
          component={LvlFourthMars}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LvlFifthJupiter"
          component={LvlFifthJupiter}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LvlSixthSaturn"
          component={LvlSixthSaturn}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LvlSeventhUran"
          component={LvlSeventhUran}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LvlEighthNeptun"
          component={LvlEighthNeptun}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
