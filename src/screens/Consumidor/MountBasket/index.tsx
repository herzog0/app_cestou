import React from 'react';
import {View, Button} from 'react-native';

// import { Container } from './styles';

const MountBasket: React.FC = ({navigation}) => {
  return (
    <Button
      title="Buscar"
      onPress={() => navigation.navigate('Produtores disponíveis')}
    />
  );
};

export default MountBasket;
