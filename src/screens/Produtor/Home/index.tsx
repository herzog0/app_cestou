import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Headline, Chip, Modal, Portal} from 'react-native-paper';
import Container from '../../../components/container';

const buttonStyle: any = {
  width: 280,
  height: 80,
  padding: 10,
  margin: 10,
  justifyContent: 'center',
};

const labelStyle: any = {
  fontSize: 50,
};

const contentStyle: any = {
  justifyContent: 'space-evenly',
};

const textStyle: any = {fontSize: 12, flexWrap: 'wrap'};

const ModalView = props => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={props.containerStyle}>
        <Headline
          style={{alignSelf: 'center', marginBottom: 40, textAlign: 'center'}}>
          {props.headline}
        </Headline>
        <Text>{props.text}</Text>
      </Modal>
    </Portal>
  );
};

const DonateModal = props => {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        onDismiss={props.hideModal}
        contentContainerStyle={props.containerStyle}>
        <Headline
          style={{alignSelf: 'center', marginBottom: 40, textAlign: 'center'}}>
          {'Atenção!'}
        </Headline>
        <Text>
          {'Você possui um lote de maçãs que ainda não foi vendido e está prestes a expirar! \n\n' +
            'Confirme abaixo se você já vendeu esse lote:'}
        </Text>
      </Modal>
    </Portal>
  );
};

const Home: React.FC = ({navigation}) => {
  const [visibleModalChip, setVisibleModalChip] = React.useState(false);
  const [visibleModalBatch, setVisibleModalBatch] = React.useState(false);
  const [shouldRequest, setShouldRequest] = React.useState(true);

  const showModalModalChip = () => setVisibleModalChip(true);
  const hideModalModalChip = () => setVisibleModalChip(false);

  const showModalModalBatch = () => setVisibleModalBatch(true);
  const hideModalModalBatch = () => setVisibleModalBatch(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 40};

  const [counter, setCounter] = React.useState(0);
  useEffect(() => {
    const id = setTimeout(() => {
      setCounter(counter + 1);
      shouldEnableText().then().catch(console.error);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [counter]);

  const shouldEnableText = async () => {
    if (shouldRequest) {
      const response = await fetch('https://8f9ac6693e87.ngrok.io/product');
      const json = await response.json();
      const item = json[0];
      if (item.expiresIn.includes('2021-07-26')) {
        showModalModalBatch();
        setShouldRequest(false);
      }
      console.log(`####333 ${shouldRequest}`);
      console.log(json);
    }
  };

  return (
    <Container>
      <ModalView
        visible={visibleModalChip}
        hideModal={hideModalModalChip}
        containerStyle={containerStyle}
        headline={'Você possui o selo de doador ouro!'}
        text={
          'Possuir o selo de doador ouro é ótimo para suas vendas. Isto significa que você concretizou pelos menos 3 doações de boa qualidade para instituições carentes no último mês.\n\n' +
          'Com o selo de doador ouro você é altamente sugerido no aplicativo do Cestou quando algum usuário pesquisa por um produto que você possui.\n\n' +
          'Continue doando para que suas vendas aumentem!'
        }
      />
      <DonateModal
        visible={visibleModalBatch}
        hideModal={hideModalModalBatch}
        containerStyle={containerStyle}
      />
      <View
        style={{
          justifyContent: 'space-between',
        }}>
        <View style={{marginBottom: 40}}>
          <Headline style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Bem vindo novamente José!
          </Headline>
          <Chip
            onPress={showModalModalChip}
            mode={'outlined'}
            style={{
              borderColor: 'gold',
              backgroundColor: 'gold',
              opacity: 0.5,
              width: 120,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {'Doador Ouro'}
          </Chip>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginTop: 21,
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignSelf: 'center',
            }}>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../../assets/harvest.png')}
              mode={'contained'}
              onPress={() => {
                navigation.navigate('Produto');
              }}>
              <Text style={textStyle}>Anunciar novo lote</Text>
            </Button>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../../assets/megafone.png')}
              mode={'contained'}
              onPress={() => {}}>
              <Text style={textStyle}>Meus anúncios</Text>
            </Button>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../../assets/charity.png')}
              mode={'contained'}
              onPress={() => {}}>
              <Text style={textStyle}>Minhas doações</Text>
            </Button>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../../assets/growth.png')}
              mode={'contained'}
              onPress={() => {}}>
              <Text style={textStyle}>Pedidos pendentes</Text>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Home;
