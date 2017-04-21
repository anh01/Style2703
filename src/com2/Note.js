//props -> content, button -> xoa class Component
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Control from './Control';
import ControlView from './ControlView';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isUpdating: false,
            text: this.props.content
        };
    }

    cancel() {
        this.setState({ isUpdating: false });
    }

    remove() {
        const { onRemove, index } = this.props;
        onRemove(index);
    }

    save() {
        const { onSave, index } = this.props;
        const { text } = this.state;
        onSave(index, text);
        this.setState({ isUpdating: false });
    }

    update() {
        this.setState({ isUpdating: true });
    }

    render() {
        const { content } = this.props;
        const { isUpdating } = this.state;
        const { container, input } = styles;

        const inputJSX = (
            <TextInput 
                style={input} 
                value={this.state.text} 
                onChangeText={text => this.setState({ text })}
            />
        );

        const textJSX = <Text style={{ color: '#473076' }}>{content}</Text>;

        const mainJSX = isUpdating ? inputJSX : textJSX;
        const controllJSX = isUpdating ? 
        <Control onCancel={this.cancel.bind(this)} onSave={this.save.bind(this)} /> 
        : <ControlView onRemove={this.remove.bind(this)} onUpdate={this.update.bind(this)} />;
        return (
            <View style={container}>
                {mainJSX}
                {controllJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 100, backgroundColor: '#CFE2BC', margin: 10, padding: 10, justifyContent: 'space-between' },
    button: { backgroundColor: '#5B4287', flex: 1, marginHorizontal: 10, alignItems: 'center', padding: 10, borderRadius: 5 },
    input: { height: 30, backgroundColor: '#fff', width: 350, alignSelf: 'center', paddingLeft: 10 }
});
