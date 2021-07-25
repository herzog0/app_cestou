import React, {useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {Button, Chip, Subheading, Title} from 'react-native-paper';
import Container from '../../../components/container';
import {CombinedDefaultTheme} from '../../../App';

// import { Container } from './styles';

const producers = [
  {
    id: 1,
    title: 'José Maria',
    products: 'Tem todos os produtos selecionados',
    doador: 'Doardor Ouro',
    corEtiqueta: 'gold',
  },
  {
    id: 2,
    title: 'Fulano de Tal',
    products: 'Tem 2 dos produtos selecionados',
    doador: 'Nao é doador',
    corEtiqueta: 'transparent',
  },
  {
    id: 3,
    title: 'Roberto Silva',
    products: 'Tem 1 dos produtos selecionados',
    doador: 'Doardor Prata',
    corEtiqueta: 'silver',
  },
];

const Producer = ({title, products, doador, corEtiqueta}) => {
  const [selected, setSelected] = useState(false);
  return (
    <Pressable
      onPress={() => setSelected(true)}
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
      <Subheading>{products}</Subheading>

      <Chip style={{backgroundColor: corEtiqueta}}>{doador}</Chip>
    </Pressable>
  );
};

const ProducersResult: React.FC = ({navigation}) => {
  return (
    <Container>
      <View>
        <ScrollView>
          {producers.map(producer => (
            <View key={producer.id}>
              <Producer
                title={producer?.title}
                products={producer?.products}
                doador={producer?.doador}
                corEtiqueta={producer?.corEtiqueta}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <Button
        style={{padding: 8, margin: 8}}
        mode={'contained'}
        onPress={() => navigation.navigate('Autentique-se')}>
        Buscar produtores
      </Button>
    </Container>
  );
};

export default ProducersResult;
