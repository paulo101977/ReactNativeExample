
//import default component

//Import components of this stack below:
import MainScreen from './mainscreen';
import TestScreen from './test';

import {Scene, Router} from 'react-native-router-flux';

import React, { Component } from 'react';


//Navigation component
import {
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';

/*const App = StackNavigator({
  Home: {
    screen: MainScreen,
    name: 'Home'
  },
  Test: {
    screen: TestScreen,
    name: 'Test'
  }
});*/

export default class App extends Component {
  render() {
    return(
      <Router>
        <Scene key="root">
          <Scene key="home" component={MainScreen}/>
          <Scene key="test" component={TestScreen} title="Test"/>
        </Scene>
      </Router>
    )
  }
}


/*const App = DrawerNavigator({
  Home: {
    screen: MainScreen,
    name: 'Home'
  },
  Test: {
    screen: TestScreen,
    name: 'Test'
  }
});*/

//export default App;
