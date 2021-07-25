import React from 'react';
import {View, Text, Button} from 'react-native';
import {Container} from './styles';

const Home: React.FC = ({navigation}) => {
  return (
    <Container>
      <Button
        title="Monte sua cesta"
        onPress={() => navigation.navigate('Monte sua cesta')}
      />
    </Container>
  );
};

export default Home;
