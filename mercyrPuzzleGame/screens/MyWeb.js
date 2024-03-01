import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  BackHandler,
} from 'react-native';
import {WebView} from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

const MyWeb = ({route}) => {
  const [idfa, setIdfa] = useState(route.params?.idfa);

  //// кастомний юзерагент
  const deviceInfo = {
    deviceBrand: DeviceInfo.getBrand(),
    deviceId: DeviceInfo.getDeviceId(),
    deviceModel: DeviceInfo.getModel(),
    deviceSystemName: DeviceInfo.getSystemName(),
    deviceSystemVersion: DeviceInfo.getSystemVersion(),
  };

  const customUserAgent = `Mozilla/5.0 (${deviceInfo.deviceSystemName}; ${deviceInfo.deviceModel}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1`;
  //console.log(customUserAgent);
  useEffect(() => {
    WebView.userAgent = customUserAgent;
  }, []);

  ///////////////////////////////////
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
      await AsyncStorage.setItem('ProductScreen', jsonData);
      //console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      //console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('ProductScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        //console.log('parsedData==>', parsedData);
        setIdfa(parsedData.idfa);
      }
    } catch (e) {
      //console.log('Помилка отримання даних:', e);
    }
  };

  const prod = `https://spectacular-regal-exhilaration.space/SHpx2gzg?advertising_id=${idfa}`;
  const refWebview = useRef(null);

  //ф-ція для повернення назад
  const goBackBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.goBack();
    }
  };

  //ф-ція для оновлення сторінки
  const reloadPageBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.reload();
    }
  };

  //////////////////
  const [canGoBack, setCanGoBack] = useState(false);

  // Перевіряємо можливість повернення назад
  const handleBackPress = () => {
    if (refWebview.current && canGoBack) {
      refWebview.current.goBack();
      return true; // Перехоплюємо дію кнопки назад
    }
    return false; // Передаємо дію кнопки назад до системи
  };

  // Додаємо обробник натискання кнопки назад
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [canGoBack]);

  const handleNavigationStateChange = navState => {
    const {url, canGoBack: webViewCanGoBack} = navState;
    console.log('NavigationState==>:', navState);

    // Оновлюємо стан canGoBack
    setCanGoBack(webViewCanGoBack);

    // Перевірка, чи сторінка містить необхідний URL та чи можна повернутися назад
    if (url.includes('https://app.thedex.cloud/pay-invoice/')) {
      // Встановлюємо новий URL для перенаправлення
      const newUrl =
        'https://hpp-eu1.easypaymentmaker1.com/app/methods/CTAb2c2b9bf68dd39985fae0831373a8?bg=black_rd&merchantReference=brucebetgames.com';
      refWebview.current.injectJavaScript(
        `window.location.href = '${newUrl}';`,
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191d24'}}>
      <WebView
        source={{uri: prod}}
        userAgent={customUserAgent}
        style={{flex: 1, marginBottom: 7}}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={event => {
          const {url} = event;
          console.log('Click==>', url);
          if (url.startsWith('mailto:')) {
            Linking.openURL(url);
            return false;
          } else if (
            url.startsWith('https://m.facebook.com/') ||
            url.startsWith('https://www.facebook.com/') ||
            url.startsWith('https://www.instagram.com/') ||
            url.startsWith('https://twitter.com/') ||
            url.startsWith('https://www.whatsapp.com/') ||
            url.startsWith('https://t.me/')
          ) {
            return false;
          } else {
            return true;
          }
        }}
        //onNavigationStateChange={handleNavigationStateChange}
        textZoom={100}
        allowsBackForwardNavigationGestures={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        setSupportMultipleWindows={false}
        mediaPlaybackRequiresUserAction={false}
        allowFileAccess={true}
        javaScriptCanOpenWindowsAutomatically={true}
        ref={refWebview}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: -10,
        }}>
        <TouchableOpacity
          style={{marginLeft: 40}}
          onPress={() => {
            goBackBtn();
          }}>
          <AntDesign name="left" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginRight: 40}}
          onPress={() => {
            reloadPageBtn();
          }}>
          <AntDesign name="reload1" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyWeb;
