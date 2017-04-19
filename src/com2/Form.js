//input text + button 
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    addNote() {
        const { text } = this.state;
        const { handleAdd } = this.props;
        handleAdd(text);
        this.setState({ text: '' });
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={{ height: 50, backgroundColor: '#fff' }} 
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text} 
                />
                <TouchableOpacity onPress={this.addNote.bind(this)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Form;
