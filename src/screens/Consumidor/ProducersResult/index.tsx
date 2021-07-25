import React from 'react';
import {Button, View} from 'react-native';

// import { Container } from './styles';

const ProducersResult: React.FC = ({navigation}) => {
  return (
    <Button
      title="Entrar em contato"
      onPress={() => navigation.navigate('Autentique-se')}
    />
  );
};

export default ProducersResult;
