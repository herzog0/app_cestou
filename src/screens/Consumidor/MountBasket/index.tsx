import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider, List, Button} from 'react-native-paper';
import Checkbox from '../../../components/checkbox';
import _ from 'lodash';
import Container from '../../../components/container';
// import { Container } from './styles';

const products = [
  {id: 1, title: 'Abobrinha'},
  {id: 2, title: 'alcachofra'},
  {id: 3, title: 'acelga'},
  {id: 4, title: 'alface'},
  {id: 5, title: 'agrião'},
  {id: 6, title: 'aipo'},
  {id: 7, title: 'aspargo'},
  {id: 8, title: 'bertalha'},
  {id: 9, title: 'berinjela'},
  {id: 10, title: 'brócolis'},
  {id: 11, title: 'cebola'},
  {id: 12, title: 'cebolinha'},
  {id: 13, title: 'chicória'},
  {id: 14, title: 'couve'},
  {id: 15, title: 'coentro'},
  {id: 16, title: 'couve-flor'},
  {id: 17, title: 'espinafre'},
  {id: 18, title: 'funcho'},
  {id: 19, title: 'jiló'},
  {id: 20, title: 'maxixe'},
  {id: 21, title: 'palmito'},
  {id: 22, title: 'pepino'},
  {id: 23, title: 'pimentão'},
  {id: 24, title: 'rabanete'},
  {id: 25, title: 'repolho'},
  {id: 26, title: 'salsa'},
  {id: 27, title: 'tomate'},
];

const MountBasket: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{padding: 16}}>
        <ScrollView style={{maxHeight: 400}}>
          {products.map(product => (
            <>
              <List.Item
                title={_.capitalize(product?.title)}
                right={() => <Checkbox />}
              />
              <Divider />
            </>
          ))}
        </ScrollView>
      </View>

      <Button
        mode={'contained'}
        onPress={() => navigation.navigate('Produtores disponíveis')}>
        Buscar produtores
      </Button>
    </Container>
  );
};

export default MountBasket;
