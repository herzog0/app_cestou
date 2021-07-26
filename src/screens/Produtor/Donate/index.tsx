import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Button, Subheading, Headline, Title, Chip} from 'react-native-paper';
import Container from '../../../components/container';
import {CombinedDefaultTheme} from '../../../App';

const producers = [
  {
    id: 1,
    title: 'Instituto Cuidar',
    products: 'Casa de repouso',
    doador: 'Não recebe doações há um mês',
    corEtiqueta: '#ff8a80',
  },
  {
    id: 2,
    title: 'Creche da Vila Sol',
    products: 'Creche comunitária',
    doador: 'Não recebe doações há uma semana',
    corEtiqueta: '#ff8a80',
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
      <View style={{maxWidth: 270, marginTop: 8}}>
        <Chip
          style={{
            backgroundColor: corEtiqueta,
            borderColor: '#aaa',
            opacity: 1,
            width: 270,
          }}>
          <Text>{doador}</Text>
        </Chip>
      </View>
    </Pressable>
  );
};

const Donate: React.FC = ({navigation}) => {
  const _buttonStyle: any = {
    width: 280,
    height: 60,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  };

  const _labelStyle: any = {
    fontSize: 50,
  };

  const _contentStyle: any = {
    justifyContent: 'space-evenly',
  };

  const _textStyle: any = {fontSize: 12, flexWrap: 'wrap'};

  return (
    <Container>
      <ScrollView style={{maxHeight: 1000}}>
        <View style={{padding: 16}}>
          <Headline
            style={{
              alignSelf: 'center',
              marginBottom: 40,
              textAlign: 'center',
            }}>
            Doe este lote e seja um doador platina!
          </Headline>
          <Subheading>
            {'Certo, você ainda não vendeu o lote de maçãs (ou uma parte dele). \n' +
              'Você aceitaria doar este lote para alguma das instituições abaixo? \n\n' +
              'Basta selecionar as instituições para as quais você quer doar e cuidaremos do resto!'}
          </Subheading>
          <>
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
          </>
          <Subheading>
            {'Caso aceite fazer a doação notificaremos inúmeros clientes da plataforma pedindo que paguem o seu custo de transporte até o local de doação! \n' +
              'Ou, caso a instituição tenha a possibilidade, ela mesma irá até você para buscar o lote. \n\n' +
              'Note que, caso você doe este lote, sua visibilidade na plataforma aumentará, melhorando as suas vendas! '}
          </Subheading>
        </View>
        <Button
          style={_buttonStyle}
          labelStyle={_labelStyle}
          contentStyle={_contentStyle}
          mode={'contained'}
          onPress={() => navigation.navigate('Doação em andamento')}>
          <Text style={_textStyle}>Doar</Text>
        </Button>
        <Button
          style={_buttonStyle}
          labelStyle={_labelStyle}
          contentStyle={_contentStyle}
          mode={'contained'}
          onPress={() => {}}>
          <Text style={_textStyle}>Não vou doar</Text>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Donate;
