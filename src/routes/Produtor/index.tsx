import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Produtor/Home';
import Authentication from '../../screens/Produtor/Authentication';
import Product from '../../screens/Produtor/Product';
import Unity from '../../screens/Produtor/Unity';
import Quantity from '../../screens/Produtor/Quantity';
import Expiration from '../../screens/Produtor/Expiration';
import Delivery from '../../screens/Produtor/Delivery';

import Donate from '../../screens/Produtor/Donate';
import Donating from '../../screens/Produtor/Donating';
import AskDonation from '../../screens/Produtor/AskDonation';
import Logo from '../../components/logo';
import {Button, IconButton} from 'react-native-paper';

const Stack = createStackNavigator();

function Produtor() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <Logo {...props} />,
          headerRight: () => (
            <IconButton
              icon="account-circle"
              color={'#a1ad66'}
              size={30}
              onPress={() => console.log('Pressed')}
            />
          ),
        }}
      />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="Produto" component={Product} />
      <Stack.Screen name="Unidade" component={Unity} />
      <Stack.Screen name="Quantidade" component={Quantity} />
      <Stack.Screen name="Validade" component={Expiration} />
      <Stack.Screen name="Entrega" component={Delivery} />
      <Stack.Screen name="Doe um lote" component={Donate} />
      <Stack.Screen name="Doação em andamento" component={Donating} />
      <Stack.Screen name="Atenção!" component={AskDonation} />
    </Stack.Navigator>
  );
}

export default Produtor;
