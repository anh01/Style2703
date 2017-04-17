import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/com2/App';
// import Nav from './src/components/Nav';

export default class StyleDemo extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('StyleDemo', () => StyleDemo);
