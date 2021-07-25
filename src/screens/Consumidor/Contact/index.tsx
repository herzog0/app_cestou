import React from 'react';
import {Button, View} from 'react-native';

// import { Container } from './styles';

const Contact: React.FC = ({navigation}) => {
  return (
    <Button
      title="Contato com o produtor"
      onPress={() => navigation.navigate('Conversa com o produtor 1')}
    />
  );
};

export default Contact;
