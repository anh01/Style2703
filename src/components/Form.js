import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { soA: '' };
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DFF5C9' }}>
                <TextInput 
                    style={{ height: 30, backgroundColor: '#fff' }} 
                    placeholder="Enter number a"
                    onChangeText={text => this.setState({ soA: text })}
                />
            </View>
        );
    }
}
