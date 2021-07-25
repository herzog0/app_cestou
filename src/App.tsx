import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Consumidor from './routes/index';
import {Provider as PaperProvider} from 'react-native-paper';

// se você usa hooks adicione no corpo do seu Function Component

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <PaperProvider>
      <StatusBar />
      <NavigationContainer>
        <Consumidor />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
