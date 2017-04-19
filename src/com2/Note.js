//props -> content, button -> xoa class Component
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { isUpdating: false };
    }

    remove() {
        const { onRemove, index } = this.props;
        onRemove(index);
    }

    render() {
        const { content } = this.props;
        const { isUpdating } = this.state;
        const { container, button, input } = styles;

        const inputJSX = (
            <TextInput style={input} value={content} />
        );

        const textJSX = <Text style={{ color: '#473076' }}>{ content }</Text>;

        const mainJSX = isUpdating ? inputJSX : textJSX;

        return (
            <View style={container}>
                { mainJSX }
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={button} onPress={this.remove.bind(this)}>
                        <Text style={{ color: '#fff' }}>Xoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={() => this.setState({ isUpdating: !isUpdating })}>
                        <Text style={{ color: '#fff' }}>Sua</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 100, backgroundColor: '#CFE2BC', margin: 10, padding: 10, justifyContent: 'space-between' },
    button: { backgroundColor: '#5B4287', flex: 1, marginHorizontal: 10, alignItems: 'center', padding: 10, borderRadius: 5 },
    input: { height: 30, backgroundColor: '#fff', width: 350, alignSelf: 'center', paddingLeft: 10 }
});
