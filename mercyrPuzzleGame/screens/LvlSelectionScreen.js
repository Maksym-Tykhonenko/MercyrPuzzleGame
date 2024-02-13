import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';

const LvlSelectionScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/bgr1.jpeg')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flex: 1, width: '100%', position: 'relative'}}>
          {/**LVL`s Block */}
          <View style={{marginHorizontal: 10, marginTop: 30}}>
            <ScrollView>
              {/**MARCYRY Lvl*/}
              <TouchableOpacity
                onPress={() => navigation.navigate('LvlFirstMarcyry')}
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/mercury.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Marcyry
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LvlSecondVenus');
                }}
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/Venus.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Venus
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/Earth.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Earth
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/mars.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Mars
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/Jupiter.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Jupiter
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/saturn1.webp')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Saturn
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/uran.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Uran
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  width: '100%',
                  height: 230,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#e2e7ea',
                  marginBottom: 15,
                }}>
                <Image
                  source={require('../assets/planats/Neptun.jpeg')}
                  style={{
                    width: '100%',
                    height: 200,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <Text
                  style={{color: '#e2e7ea', fontWeight: '700', fontSize: 18}}>
                  Neptun
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/**BTN back */}
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

export default LvlSelectionScreen;
