import React from 'react';
import {View, Text} from 'react-native';
import {Searchbar, Button} from 'react-native-paper';
import Banner from '../../../components/banner';
import Container from '../../../components/container';

const Home: React.FC = ({navigation}) => {
  return (
    <Container>
      <Searchbar placeholder="Quais alimentos você quer?" />
      <Banner
        text={
          'Com o Cestou você procura os alimentos que você quer e nós mostramos os produtores próximos a você que podem te atender! Você ajuda os produtores e ainda pode doar o excedente para instituições reconhecidas'
        }
        imageUri={'../../assets/cestou_icone.png'}
      />
      <Button
        style={{margin: 8, padding: 8}}
        mode={'contained'}
        onPress={() => navigation.navigate('Monte sua cesta')}>
        Monte sua cesta
      </Button>
    </Container>
  );
};

export default Home;
