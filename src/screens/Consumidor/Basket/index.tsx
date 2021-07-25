import React from 'react';
import {Button, View} from 'react-native';

// import { Container } from './styles';

const Basket: React.FC = ({navigation}) => {
  return (
    <Button
      title="Enviar sua cesta para os produtores"
      onPress={() => navigation.navigate('Sua cesta de 25/07')}
    />
  );
};

export default Basket;
