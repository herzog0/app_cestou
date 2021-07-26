import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View, Image} from 'react-native';
import {Button, Subheading, Headline, Title, Chip} from 'react-native-paper';
import Container from '../../../components/container';
import {CombinedDefaultTheme} from '../../../App';

const Donating: React.FC = ({navigation}) => {
  return (
    <Container>
      <View>
        <Headline
          style={{
            alignSelf: 'center',
            marginBottom: 20,
            textAlign: 'center',
          }}>
          Muito obrigado pela sua doação!
        </Headline>
        <Headline
          style={{
            alignSelf: 'center',
            marginBottom: 40,
            textAlign: 'center',
          }}>
          :)
        </Headline>
        <Subheading
          style={{
            alignSelf: 'center',
            marginBottom: 40,
            textAlign: 'center',
          }}>
          {'Estamos disparando mensagens para nossos clientes pedindo a ajuda para seu frete. \n ' +
            '\nAguarde que entraremos em contato assim que tivermos mais informações!'}
        </Subheading>
        <Image
          style={{width: 200, height: 200, alignSelf: 'center'}}
          source={require('../../../assets/truck.png')}
        />
      </View>
    </Container>
  );
};

export default Donating;
