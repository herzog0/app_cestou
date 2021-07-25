import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import * as React from 'react';
import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Consumidor from './routes/Consumidor';
import Produtor from './routes/Produtor';
import Role from './routes/Role';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

// se você usa hooks adicione no corpo do seu Function Component
export const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#a1ad66',
    background: '#f3f2f0',
    surface: '#dbe5a6',
    backdrop: '#65544299',
    accent: '#663c24',
  },
};

const SelectRole = () => {
  const [role, setRole] = React.useState('None');

  if (role === 'None') {
    return <Role setRole={setRole} />;
  } else if (role === 'Consumidor') {
    return <Consumidor />;
  } else {
    return <Produtor />;
  }
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <StatusBar />
      <NavigationContainer theme={CombinedDefaultTheme}>
        <SelectRole />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
