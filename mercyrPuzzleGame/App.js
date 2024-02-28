import React, {useState, useEffect, useRef} from 'react';
import {Text, TouchableOpacity, View, Animated, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LogLevel, OneSignal} from 'react-native-onesignal';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import LvlSelectionScreen from './screens/LvlSelectionScreen';
import RulseScreen from './screens/RulseScreen';
import MyWeb from './screens/MyWeb';
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
  const [route, setRoute] = useState();

  ///////////// Отримання IDFA
  const [idfa, setIdfa] = useState(null);
  console.log('idfa==>', idfa);
  //OneSignal id  e7992b4b-26a0-4f39-8c3f-31355930fe17

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa]);

  const setData = async () => {
    try {
      const data = {
        idfa,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
      } else {
        await fetchIdfa();
        await someFunction();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        setIdfa(true);
      }
    } catch (err) {
      console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  // OneSignal
  // d8fe725c-4ae3-44cc-b07c-2fd3caad74d4

  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const someFunction = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в someFunction==> ', error);
    }
  };

  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  OneSignal.initialize('d8fe725c-4ae3-44cc-b07c-2fd3caad74d4');

  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });

  OneSignal.User.addTag('key', 'value');

  ///////// Loader
  const [loaderIsLoaded, setLoaderIsLoaded] = useState(false);
  const ChangeInView = props => {
    const appearingAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 1 to 0
    useEffect(() => {
      Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setLoaderIsLoaded(true);
      }, 8000);
    }, []);

    return (
      <View style={{position: 'relative', flex: 1}}>
        <Image
          style={{
            ...props.style,

            height: '100%',
            position: 'absolute', // Bind opacity to animated value
          }}
          source={require('./assets/updDiz/backgr_1.jpg')}
        />
        <Animated.Image
          source={require('./assets/updDiz/loader.jpg')} // Special animatable View
          style={{
            ...props.style,
            opacity: appearingAnim,
            height: '100%',
            position: 'absolute', // Bind opacity to animated value
          }}
        />
      </View>
    );
  };

  ////////// Routes
  const Routes = props => {
    if (props.isFath) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{idfa: idfa}}
            name="MyWeb"
            component={MyWeb}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
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
    );
  };

  //////////// useEffect що виріш який шлях включати
  useEffect(() => {
    const checkUrl = `https://spectacular-regal-exhilaration.space/6gZCHJmz`;
    const targetData = new Date('2024-03-04T12:00:00'); //дата з якої поч працювати prod
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  return (
    <NavigationContainer>
      {!loaderIsLoaded ? (
        <ChangeInView
          style={{
            width: '100%',
            //height: 50,
            backgroundColor: 'powderblue',
          }}></ChangeInView>
      ) : (
        <Routes isFath={route} />
      )}
    </NavigationContainer>
  );
};

export default App;
