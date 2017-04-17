//props -> content, button -> xoa class Component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Note extends Component {
    render() {
        const { content } = this.props;
        return (
            <View>
                <Text>{ content }</Text>
            </View>
        );
    }
}
