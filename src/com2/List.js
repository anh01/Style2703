//state: mang ['Lam bai tap ve nha', 'Nop bao cao cuoi thang]
import React, { Component } from 'react';
import { View } from 'react-native';
import Note from './Note';
import Form from './Form';

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

    save(index, text) {
        this.state.mang[index] = text;
        this.setState(this.state);
    }

    addNote() {
        const { text, mang } = this.state;
        this.setState({ mang: mang.concat(text), text: '' });
    }

    addNoteFromForm(text) {
        const { mang } = this.state;
        this.setState({ mang: mang.concat(text) });
    }

    render() {
        return (
            <View>
                { this.state.mang.map((e, i) => (
                    <Note 
                        key={i} 
                        content={e} 
                        onRemove={this.remove.bind(this)} 
                        onSave={this.save.bind(this)} 
                        index={i} 
                    />
                )) }
                <Form handleAdd={this.addNoteFromForm.bind(this)} />
            </View>
        );
    }
}
