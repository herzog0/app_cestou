import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Container from '../../../components/container';
import {
  Button,
  RadioButton,
  TextInput,
  Title,
  Subheading,
} from 'react-native-paper';

// import { Container } from './styles';

const Unity: React.FC = ({navigation}) => {
  const [checked, setChecked] = React.useState('Unidades');

  return (
    <Container>
      <View style={{flex: 1, maxHeight: 120, padding: 16}}>
        <Title>Você quer anunciar o tamanho do lote em:</Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, padding: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Unidades"
                status={checked === 'Unidades' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Unidades')}
              />
              <Title>Unidades</Title>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Gramas"
                status={checked === 'Gramas' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Gramas')}
              />
              <Title>Gramas</Title>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Quilos"
                status={checked === 'Quilos' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Quilos')}
              />
              <Title>Quilos</Title>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                value="Litros"
                status={checked === 'Litros' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Litros')}
              />
              <Title>Litros</Title>
            </View>
          </View>
        </View>
        <Button
          style={{padding: 8, margin: 8}}
          mode={'contained'}
          onPress={() => navigation.navigate('Quantidade')}>
          Continuar
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Unity;
