import React from 'react';
import {View, Button} from 'react-native';

// import { Container } from './styles';

const Authentication: React.FC = ({navigation}) => {
  return (
    <Button
      title="Entrar"
      onPress={() => navigation.navigate('Seja solidário')}
    />
  );
};

export default Authentication;
