import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './src/components/App';
import Nav from './src/components/Nav';

export default class StyleDemo extends Component {
  render() {
    return <Nav />;
  }
}

AppRegistry.registerComponent('StyleDemo', () => StyleDemo);
