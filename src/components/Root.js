import React, { Component } from 'react';
import { View, Text, Navigator, TouchableOpacity, StatusBar } from 'react-native';

StatusBar.setHidden(true);

class Root extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'A' }}
                renderScene={(route, navigator) => {
                    if (route.name === 'A') return <TrangA nav={navigator} />;
                    if (route.name === 'B') return <TrangB navigator={navigator} />;
                    return <TrangC navigator={navigator} />;
                }}
                configureScene={route => {
                    if (route.name === 'B') return Navigator.SceneConfigs.PushFromRight;
                    return Navigator.SceneConfigs.PushFromLeft;
                }}
            />
        );
    }
}

export default Root;

/*class TrangA extends Component {
    render() {
        const { nav } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Trang A</Text>
                <TouchableOpacity onPress={() => nav.push({ name: 'B' })}>
                    <Text>Go to B</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.push({ name: 'C' })}>
                    <Text>Go to C</Text>
                </TouchableOpacity>
            </View>
        );
    }
}*/

const TrangA = (props) => (
    <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
        <Text>Trang A</Text>
        <TouchableOpacity onPress={() => props.nav.push({ name: 'B' })}>
            <Text>Go to B</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.nav.push({ name: 'C' })}>
            <Text>Go to C</Text>
        </TouchableOpacity>
    </View>
);

const TrangB = (props) => (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <Text>Trang B</Text>
        <TouchableOpacity onPress={() => props.navigator.pop()}>
            <Text>Go back to A</Text>
        </TouchableOpacity>
    </View>
);

const TrangC = (props) => (
    <View style={{ flex: 1, backgroundColor: '#D5D5D5' }}>
        <Text>Trang C</Text>
        <TouchableOpacity onPress={() => props.navigator.pop()}>
            <Text>Go back to A</Text>
        </TouchableOpacity>
    </View>
);
