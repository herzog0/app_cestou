import React from 'react';
import {View, Text} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import Banner from '../../../components/banner';
import {Container} from './styles';

const Home: React.FC = ({navigation}) => {
  return (
    <Container>
      <Searchbar placeholder="Que alimentos você quer?" />
      <Banner
        text={
          'Com o Cestou você procura os alimentos que você quer e nós mostramos os produtores próximos a você que podem te atender! Você ajuda os produtores e ainda pode doar o excedente para instituições reconhecidas'
        }
        imageUri={'../../assets/cestou_icone.png'}
      />
      <Button
        mode={'contained'}
        onPress={() => navigation.navigate('Monte sua cesta')}>
        Monte sua cesta
      </Button>
    </Container>
  );
};

export default Home;
