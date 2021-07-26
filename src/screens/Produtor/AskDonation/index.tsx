import React, {useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {Button, Headline, Subheading} from 'react-native-paper';
import Container from '../../../components/container';

const AskDonation: React.FC = ({navigation}) => {
  const _buttonStyle: any = {
    width: 280,
    height: 60,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
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
      <View>
        <Headline
          style={{
            alignSelf: 'center',
            marginBottom: 40,
            textAlign: 'center',
          }}>
          {'Atenção!'}
        </Headline>
        <View style={{margin: 32}}>
          <Subheading>
            {'Você possui um lote de maçãs que ainda não foi vendido e está prestes a expirar! \n\n' +
              'Confirme abaixo se você já vendeu esse lote:'}
          </Subheading>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Button
            style={_buttonStyle}
            labelStyle={_labelStyle}
            contentStyle={_contentStyle}
            mode={'contained'}
            onPress={() => {}}>
            <Text style={_textStyle}>Já vendi</Text>
          </Button>
          <Button
            style={_buttonStyle}
            labelStyle={_labelStyle}
            contentStyle={_contentStyle}
            mode={'contained'}
            onPress={() => {
              navigation.navigate('Doe um lote');
            }}>
            <Text style={_textStyle}>Ainda não vendi</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default AskDonation;
