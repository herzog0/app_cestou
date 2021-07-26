import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Logo from '../../components/logo';
import RoleScreen from '../../screens/Role';
import {IconButton} from 'react-native-paper';

const Stack = createStackNavigator();

function Role({setRole}) {
  return (
    <Stack.Navigator initialRouteName="Role">
      <Stack.Screen
        name="Role"
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
        }}>
        {props => <RoleScreen setRole={setRole} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default Role;
