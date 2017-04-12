import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

class Root extends Component {
    state = {  }
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'C' }}
                renderScene={(route, navigator) => {
                    if (route.name === 'A') return <TrangA />
                    if (route.name === 'B') return <TrangB />
                    return <TrangC />
                }}
            />
        );
    }
}

export default Root;

class TrangA extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Trang A</Text>
            </View>
        );
    }
}

class TrangB extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Trang B</Text>
            </View>
        );
    }
}

class TrangC extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Trang C</Text>
            </View>
        );
    }
}