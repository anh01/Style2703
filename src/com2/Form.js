//input text + button 
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';

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
                    style={styles.input} 
                    onChangeText={text => this.setState({ text })}
                    value={this.state.text} 
                    placeholder="Enter your note"
                />
                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.button}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: { alignSelf: 'center', backgroundColor: '#473076', borderRadius: 5, padding: 10, margin: 10 },
    input: { height: 30, backgroundColor: '#fff', width: 350, alignSelf: 'center', paddingLeft: 10 }
});

export default Form;
