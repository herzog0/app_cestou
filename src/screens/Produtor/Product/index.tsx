import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import Container from '../../../components/container';
import {Button, TextInput, Title} from 'react-native-paper';

// import { Container } from './styles';

const Product: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1, maxHeight: 120, padding: 16}}>
        <Title>Qual produto foi produzido?</Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{padding: 16}}>
            <TextInput label="Busque pelo nome do produto" />
          </View>
        </View>
        <Button
          style={{padding: 8, margin: 8}}
          mode={'contained'}
          onPress={() => navigation.navigate('Unidade')}>
          Continuar
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Product;
