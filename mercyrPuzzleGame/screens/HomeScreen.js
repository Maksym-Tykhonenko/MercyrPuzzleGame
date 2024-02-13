import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            borderWidth: 3,
            borderColor: '#e2e7ea',
            width: 250,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: -50,
            marginBottom: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
          onPress={() => {
            navigation.navigate('LvlSelection');
          }}>
          <Text style={{color: '#fff', fontSize: 30}}>Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            borderWidth: 3,
            borderColor: '#e2e7ea',
            width: 250,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            //marginTop: -50,
            marginBottom: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
          onPress={() => {
            navigation.navigate('Rulse');
          }}>
          <Text style={{color: '#fff', fontSize: 30}}>Rulse</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
