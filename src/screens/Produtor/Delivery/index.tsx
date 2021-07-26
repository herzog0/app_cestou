import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Container from '../../../components/container';
import {Button, RadioButton, TextInput, Title} from 'react-native-paper';

// import { Container } from './styles';

const Delivery: React.FC = ({navigation}) => {
  const [checked, setChecked] = React.useState('Sim');

  return (
    <Container>
      <View style={{flex: 1, maxHeight: 120, padding: 16}}>
        <Title>
          Você poderá fazer entrega a domicílio deste produto para consumidores
          finais, caso eles peçam?
        </Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, padding: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Unidades"
                status={checked === 'Sim' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Sim')}
              />
              <Title>Sim</Title>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Não"
                status={checked === 'Não' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Não')}
              />
              <Title>Não</Title>
            </View>
          </View>
        </View>
        <Button
          style={{padding: 8, margin: 8}}
          mode={'contained'}
          onPress={() => {}}>
          Finalizar anúncio
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Delivery;
