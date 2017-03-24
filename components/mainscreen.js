import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Drawer from "react-native-drawer";
import { Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon , ListItem} from 'native-base';

import {Actions} from 'react-native-router-flux';

import MyList from './list';

import MyDrawer from './drawer';

//import styles
import Styles from '../styles/styles';

export default class Main extends Component {
    static navigationOptions = {
      title: 'Home',
    };

    constructor(props){
    	super(props);
    	this.state = {};

      this.openDrawer = this.openDrawer.bind(this);
      this.closeDrawer = this.closeDrawer.bind(this);
    }

    openDrawer() {
      //this._drawer._root.open();
      this._drawer.open();
    }

    closeDrawer = () => {
      //this._drawer._root.close();
      this._drawer.close();
    }

    render() {


        const drawerStyles = {
          drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3,position: 'absolute'},
        }

        return (
          <Drawer
              openDrawerOffset={100}
              ref={(ref) => { this._drawer = ref; }}
              content={ <MyDrawer navigator={this._navigator}></MyDrawer>}
              styles={drawerStyles.drawer}
              onClose={() => this.closeDrawer()}
              acceptTap={true}
            >
              <Container>
                <Content>
                  <Button block onPress={() => this.openDrawer()}>
                    <Text style={Styles.connectButton}>Open Drawer</Text>
                  </Button>
                  <Button block onPress={() => this.openDrawer()}>
                    <Text style={Styles.connectButton}>Open Drawer</Text>
                  </Button>
                  <MyList style={Styles.listSize}></MyList>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button
                          onPress={Actions.test}
                           full>
                            <Text style={Styles.connectButton}>Connect</Text>
                        </Button>
                    </FooterTab>
                </Footer>
              </Container>
            </Drawer>
        );
    }
}
