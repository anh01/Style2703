import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import List from './List';

StatusBar.setHidden(true);
export default class App extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FBD87A', flex: 1 }}>
                <List content="Xin chao cac ban" />
            </View>
        );
    }
}
