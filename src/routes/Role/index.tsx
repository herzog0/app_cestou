import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logo from '../../components/logo';
import RoleScreen from '../../screens/Role';

const Stack = createStackNavigator();

function Role({setRole}) {
  return (
    <Stack.Navigator initialRouteName="Role">
      <Stack.Screen
        name="Role"
        options={{headerTitle: props => <Logo {...props} />}}>
        {props => <RoleScreen setRole={setRole} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default Role;
