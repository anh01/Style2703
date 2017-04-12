import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './src/components/App';
import Root from './src/components/Root';

export default class StyleDemo extends Component {
  render() {
    return <Root />;
  }
}

AppRegistry.registerComponent('StyleDemo', () => StyleDemo);
