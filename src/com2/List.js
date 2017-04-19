//state: mang ['Lam bai tap ve nha', 'Nop bao cao cuoi thang]
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Note from './Note';
// import Form from './Form';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mang: ['Lam bai tap ve nha', 'Nop bao cao cuoi thang'],
            text: '' 
        };
    }

    remove(index) {
        this.state.mang.splice(index, 1);
        this.setState({ mang: this.state.mang });
    }

    addNote() {
        const { text, mang } = this.state;
        this.setState({ mang: mang.concat(text), text: '' });
    }

    render() {
        return (
            <View>
                { this.state.mang.map((e, i) => <Note key={i} content={e} onRemove={this.remove.bind(this)} index={i} />) }
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
