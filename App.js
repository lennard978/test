/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Footer,
} from 'native-base';

const App: () => React$Node = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'Image URL'}} />
              <Body>
                <Text>Blankenberge,ZeeBrugge</Text>
                <Text note>Casino </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <Image
                source={require('./components/img/aruba.jpg')}
                style={{height: 200, width: '100%', flex: 1}}
              />
              <Text>Entrance fee: Free with passport or ID</Text>
              <Text>Dress Code: Proper Casual</Text>
              <Text>Opening Hours Slots: 11:00-05:00</Text>
              <Text>Opening Hours Tables: 15:00-04:00</Text>
              <Text>Transport from Port cost's 3 euro (one way P.P)</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
