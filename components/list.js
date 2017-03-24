import React, { Component } from 'react';
import {
  Text,
  Navigator,
  View,
  StyleSheet
} from 'react-native';

import {ListItem , Button, Icon, Right} from 'native-base';

import Styles from '../styles/styles';


export default class List extends Component {

  renderList(){
    var names = [];
    for(var i = 0 ; i < 100 ; i++){
      names.push("Item " + i);
    }

    //create array of itens
    return names.map(function(value , index){
      return (
        <ListItem key={index}>
            <Text style={Styles.bigblue}>{value}</Text>

            <Right>
                <Button transparent primary iconRight>
                    <Icon name='arrow-forward' />
                </Button>
            </Right>
        </ListItem>
      )
    })
  }

    render() {
        return (
            <View style={Styles.listSize}>
                {this.renderList()}
            </View>
        );
    }
}
