import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Card, CardItem , Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon , ListItem} from 'native-base';

import MyList from './list';

//import styles
import Styles from '../styles/styles';

export default class Test extends Component {
    static navigationOptions = {
      title: 'Test',
    };
    render() {
        return (
          <Container>
            <Content>
              <Card>
                <CardItem header>
                    <Text>NativeBase</Text>
                </CardItem>

                <CardItem>
                    <Body>
                        <Text>
                            Balbabalabalbala
                        </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text>GeekyAnts</Text>
                </CardItem>
              </Card>
            </Content>
          </Container>
        );
    }
}
