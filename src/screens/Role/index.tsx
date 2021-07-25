import React from 'react';
import {View, Text} from 'react-native';
import {Button, Title, Subheading, Headline} from 'react-native-paper';
import Container from '../../components/container';

const buttonStyle: any = {
  width: 150,
  height: 180,
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 10,
  paddingRight: 10,
  justifyContent: 'center',
};

const labelStyle: any = {
  fontSize: 64,
};

const contentStyle: any = {
  justifyContent: 'space-evenly',
  flexDirection: 'column',
};

const textStyle: any = {fontSize: 12, flexWrap: 'wrap'};

const Role: React.FC = ({setRole, navigation}) => {
  return (
    <Container>
      <View
        style={{
          alignContent: 'space-around',
        }}>
        <View style={{marginBottom: 40}}>
          <Headline style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Olá, bem vindo ao Cestou
          </Headline>
          <Subheading style={{fontWeight: 'bold', alignSelf: 'center'}}>
            :)
          </Subheading>
          <Subheading style={{fontWeight: 'bold', alignSelf: 'center'}}>
            Por favor, escolha um espaço para entrar
          </Subheading>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginTop: 21,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../assets/basket.png')}
              mode={'contained'}
              onPress={() => setRole('Consumidor')}>
              <Text style={textStyle}>Consumidor</Text>
            </Button>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../assets/farmer.png')}
              mode={'contained'}
              onPress={() => setRole('Produtor')}>
              <Text style={textStyle}>Produtor</Text>
            </Button>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 21,
            }}>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../assets/partner.png')}
              mode={'contained'}
              onPress={() => setRole('Associacao')}>
              <Text style={textStyle}>Associação</Text>
            </Button>
            <Button
              style={buttonStyle}
              labelStyle={labelStyle}
              contentStyle={contentStyle}
              icon={require('../../assets/charity.png')}
              mode={'contained'}
              onPress={() => setRole('Entidade')}>
              <Text style={textStyle}>Donatário</Text>
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Role;
