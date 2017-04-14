import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './src/components/App';
import Form from './src/components/Form';
import Add from './src/components/Add';

export default class StyleDemo extends Component {
  render() {
    return <Add soA={10} soB={20} />;
  }
}

AppRegistry.registerComponent('StyleDemo', () => StyleDemo);
