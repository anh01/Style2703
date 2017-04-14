import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { soA: '', soB: '' };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <TextInput
                    style={{ height: 30, backgroundColor: '#fff', margin: 10 }}
                    placeholder="Enter number a"
                    onChangeText={text => this.setState({ soA: text })}
                />
                <TextInput
                    style={{ height: 30, backgroundColor: '#fff', margin: 10 }}
                    placeholder="Enter number b"
                    onChangeText={text => this.setState({ soB: text })}
                />
                <TouchableOpacity onPress={() => this.props.navigator.push({ name: 'ADD' })}>
                    <Text>Go to Add Component</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
