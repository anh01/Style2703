import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './src/components/App';
import Form from './src/components/Form';

export default class StyleDemo extends Component {
  render() {
    return <Form />;
  }
}

AppRegistry.registerComponent('StyleDemo', () => StyleDemo);
