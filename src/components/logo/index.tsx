import React from 'react';
import {View, Image} from 'react-native';

// import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Image
      style={{width: 200, height: 50}}
      source={require('../../assets/logo.jpg')}
    />
  );
};

export default Logo;
