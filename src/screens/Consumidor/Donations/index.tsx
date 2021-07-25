import React from 'react';
import {Button, View} from 'react-native';

// import { Container } from './styles';

const Donations: React.FC = ({navigation}) => {
  return (
    <Button
      title="Quero ajudar"
      onPress={() => navigation.navigate('Sua cesta')}
    />
  );
};

export default Donations;
