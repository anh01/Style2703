import React, { Component } from 'react';
import { View, Text, Navigator, TouchableOpacity } from 'react-native';

class Root extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'A' }}
                renderScene={(route, navigator) => {
                    if (route.name === 'A') return <TrangA nav={navigator}/>
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
        const { nav } =this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Trang A</Text>
                <TouchableOpacity onPress={() => nav.push({ name: 'B' })}>
                    <Text>Go to B</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class TrangB extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
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