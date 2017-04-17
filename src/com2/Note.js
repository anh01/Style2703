//props -> content, button -> xoa class Component
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Note extends Component {
    remove() {
        const { parent, index } = this.props;
        parent.state.mang.splice(index, 1);
        parent.setState({ mang: parent.state.mang });
    }
    render() {
        const { content } = this.props;
        return (
            <View style={{ height: 50, backgroundColor: '#CFE2BC', margin: 10 }}>
                <Text>{ content }</Text>
                <TouchableOpacity style={{ backgroundColor: '#5B4287' }} onPress={this.remove.bind(this)}>
                    <Text style={{ color: '#fff' }}>Xoa</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
