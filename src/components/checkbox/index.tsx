import React from 'react';
import {View} from 'react-native';
import {Checkbox as Check} from 'react-native-paper';
// import { Container } from './styles';

const Checkbox: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Check
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
  );
};

export default Checkbox;
