//state: mang ['Lam bai tap ve nha', 'Nop bao cao cuoi thang]
import React, { Component } from 'react';
import { View } from 'react-native';
import Note from './Note';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: ['Lam bai tap ve nha', 'Nop bao cao cuoi thang'] };
    }
    render() {
        return (
            <View>
                { this.state.mang.map((e, i) => <Note key={i} content={e} parent={this} index={i} />) }
            </View>
        );
    }
}
