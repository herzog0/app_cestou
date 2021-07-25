import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Consumidor/Home';
import Authentication from '../screens/Consumidor/Authentication';
import Basket from '../screens/Consumidor/Basket';
import Chat from '../screens/Consumidor/Chat';
import Contact from '../screens/Consumidor/Contact';
import Donations from '../screens/Consumidor/Donations';
import MountBasket from '../screens/Consumidor/MountBasket';
import ProducersResult from '../screens/Consumidor/ProducersResult';
import Logo from '../components/logo';

const Stack = createStackNavigator();

function Consumidor() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: props => <Logo {...props} />}}
      />
      <Stack.Screen name="Monte sua cesta" component={MountBasket} />
      <Stack.Screen name="Produtores disponíveis" component={ProducersResult} />
      <Stack.Screen name="Autentique-se" component={Authentication} />
      <Stack.Screen name="Seja solidário" component={Donations} />
      <Stack.Screen name="Sua cesta" component={Basket} />
      <Stack.Screen name="Sua cesta de 25/07" component={Contact} />
      <Stack.Screen name="Conversa com o produtor 1" component={Chat} />
    </Stack.Navigator>
  );
}

export default Consumidor;
