import React from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import Container from '../../../components/container';
import {Button, TextInput, Title} from 'react-native-paper';

// import { Container } from './styles';

const Authentication: React.FC = ({navigation}) => {
  return (
    <Container>
      <View style={{flex: 1, maxHeight: 120, padding: 16}}>
        <Title>
          Estamos quase lá! Precisamos que você faça login para te colocarmos em
          contato com os produtores.
        </Title>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{padding: 16}}>
            <TextInput label="Nome de usuário" />
          </View>
          <View style={{padding: 16}}>
            <TextInput
              label="Senha"
              secureTextEntry
              right={<TextInput.Icon name="eye" />}
            />
          </View>
        </View>
        <Button
          style={{padding: 8, margin: 8}}
          mode={'contained'}
          onPress={() => navigation.navigate('Seja solidário')}>
          Entrar
        </Button>
      </KeyboardAvoidingView>
      <Button onPress={() => navigation.navigate('Autentique-se')}>
        Cadastrar
      </Button>
      <Button onPress={() => navigation.navigate('Autentique-se')}>
        Esqueci minha senha
      </Button>
    </Container>
  );
};

export default Authentication;
