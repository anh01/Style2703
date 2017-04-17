//state: mang ['Lam bai tap ve nha', 'Nop bao cao cuoi thang]
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Note from './Note';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: ['Lam bai tap ve nha', 'Nop bao cao cuoi thang'] };
    }
    render() {
        return (
            <View>
                <Text>List Component</Text>
            </View>
        );
    }
}
