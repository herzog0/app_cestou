import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
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
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <View
      style={{
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
      <Subheading>{products} </Subheading>
      <View style={{maxWidth: 120, marginTop: 8}}>
        <Chip
          mode={'outlined'}
          style={{
            borderColor: corEtiqueta,
            backgroundColor: corEtiqueta,
            opacity: 0.5,
          }}>
          {doador}
        </Chip>
      </View>
      <View>
        <ScrollView style={{maxHeight: 350}}>
          {productorProducts?.map(product => (
            <View key={product.id}>
              <List.Item
                title={_.capitalize(product?.title)}
                right={() => <Checkbox isChecked={true} />}
              />
              <Divider />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const Basket: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1}}>
        <ScrollView>
          {producers.map(producer => (
            <View key={producer.id}>
              <Producer
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

      <Button
        style={{padding: 8, margin: 8}}
        mode={'contained'}
        onPress={() => navigation.navigate('Sua cesta')}>
        Finalizar minha cesta
      </Button>
    </Container>
  );
};

export default Basket;
