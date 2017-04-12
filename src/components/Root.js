import React, { Component } from 'react';
import { View, Text } from 'react-native';



class Root extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Text>Root component</Text>
            </View>
        );
    }
}

export default Root;

class TrangA extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}></View>
        );
    }
}

class TrangB extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}></View>
        );
    }
}

class TrangC extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}></View>
        );
    }
}