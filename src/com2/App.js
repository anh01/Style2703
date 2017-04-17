import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Note from './Note';

StatusBar.setHidden(true);
export default class App extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FBD87A', flex: 1 }}>
                <Note content="Xin chao cac ban" />
            </View>
        );
    }
}
