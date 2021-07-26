import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Container from '../../../components/container';
import {Button, TextInput, Title} from 'react-native-paper';

// import { Container } from './styles';

const Expiration: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1, maxHeight: 120, padding: 16}}>
        <Title>
          Quantos dias esse lote irá durar antes de sua qualidade ficar
          comprometida?
        </Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{padding: 16}}>
            <TextInput label="Digite um número de dias" />
          </View>
        </View>
        <Button
          style={{padding: 8, margin: 8}}
          mode={'contained'}
          onPress={() => navigation.navigate('Entrega')}>
          Continuar
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Expiration;
