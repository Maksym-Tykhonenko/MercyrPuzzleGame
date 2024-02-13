import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const RulseScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex: 1, width: '100%', position: 'relative'}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 3,
              borderColor: '#e2e7ea',
              width: 60,
              height: 60,
              borderRadius: 10,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={{color: '#fff'}}>GO</Text>
            <Text style={{color: '#fff'}}>BACK</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RulseScreen;
