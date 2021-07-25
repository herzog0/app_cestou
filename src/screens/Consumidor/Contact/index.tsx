import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {
  Button,
  Chip,
  Divider,
  List,
  Subheading,
  Title,
} from 'react-native-paper';
import {CombinedDefaultTheme} from '../../../App';
import Checkbox from '../../../components/checkbox';
import Container from '../../../components/container';
import _ from 'lodash';
// import { Container } from './styles';

const producers = [
  {
    id: 1,
    title: 'José Maria',
    products: 'Tem todos os produtos selecionados',
    doador: 'Doardor Ouro',
    corEtiqueta: 'gold',
    productorProducts: [
      {id: 2, title: 'alcachofra'},
      {id: 3, title: 'acelga'},
      {id: 4, title: 'alface'},
    ],
  },
  {
    id: 3,
    title: 'Roberto Silva',
    products: 'Tem 1 dos produtos selecionados',
    doador: 'Doardor Prata',
    corEtiqueta: 'silver',
    productorProducts: [{id: 11, title: 'cebola'}],
  },
];

const Producer = ({
  title,
  products,
  doador,
  corEtiqueta,
  productorProducts,
  navigation,
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => navigation.navigate('Conversa com o produtor 1')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: selected ? 3 : 2,
        borderColor: selected
          ? CombinedDefaultTheme.colors.backdrop
          : CombinedDefaultTheme.colors.primary,
        backgroundColor: selected
          ? CombinedDefaultTheme.colors.surface
          : CombinedDefaultTheme.colors.background,
        borderStyle: 'solid',
        borderRadius: 16,
        margin: 8,
        padding: 16,
      }}>
      <Title>{title}</Title>
      <View style={{maxWidth: 36, marginTop: 8}}>
        <Chip
          mode={'outlined'}
          textStyle={{color: 'white'}}
          style={{
            borderColor: corEtiqueta,
            backgroundColor: '#dc143c',
          }}>
          {productorProducts.length}
        </Chip>
      </View>
    </Pressable>
  );
};

const Contact: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1}}>
        <ScrollView>
          {producers.map(producer => (
            <View key={producer.id}>
              <Producer
                navigation={navigation}
                title={producer?.title}
                products={producer?.products}
                doador={producer?.doador}
                corEtiqueta={producer?.corEtiqueta}
                productorProducts={producer?.productorProducts}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </Container>
  );
};

export default Contact;
