import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Title, Subheading, List, Divider} from 'react-native-paper';
import Checkbox from '../../../components/checkbox';
import _ from 'lodash';
import Container from '../../../components/container';
// import { Container } from './styles';
const products = [
  {id: 1, title: 'Abobrinha - 7kg'},
  {id: 2, title: 'alcachofra - 25un'},
  {id: 3, title: 'acelga - 7un'},
  {id: 4, title: 'alface - 22un'},
];

const Donations: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{padding: 16}}>
        <Title>
          Verificamos que seu bairro ainda faz poucas doações, ajude a mudar
          essa situação!
        </Title>
        <Subheading>
          Abaixo mostramos algumas verduras e legumes dos produtores que você
          selecionou que provavelmente serão descartadas. Você pode evitar isso
          doando.
        </Subheading>
      </View>
      <View>
        <ScrollView style={{maxHeight: 250}}>
          {products.map(product => (
            <View key={product.id}>
              <List.Item
                title={_.capitalize(product?.title)}
                right={() => <Checkbox />}
              />
              <Divider />
            </View>
          ))}
        </ScrollView>
      </View>
      <Button
        style={{margin: 8, padding: 8}}
        mode={'contained'}
        onPress={() => navigation.navigate('Sua cesta')}>
        Quero ajudar!
      </Button>
    </Container>
  );
};

export default Donations;
