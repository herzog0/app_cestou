import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/Produtor/Home';
import Donate from '../../screens/Produtor/Donate';
import Donating from '../../screens/Produtor/Donating';
import Logo from '../../components/logo';

const Stack = createStackNavigator();

function Produtor() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: props => <Logo {...props} />}}
      />
      <Stack.Screen name="Doe um lote" component={Donate} />
      <Stack.Screen name="Doação em andamento" component={Donating} />
    </Stack.Navigator>
  );
}

export default Produtor;
