//props -> content, button -> xoa class Component
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Note extends Component {
    // remove() {
    //     const { parent, index } = this.props;
    //     parent.state.mang.splice(index, 1);
    //     parent.setState({ mang: parent.state.mang });
    // }

    remove() {
        const { onRemove, index } = this.props;
        onRemove(index);
    }

    render() {
        const { content } = this.props;
        const { container, button } =styles;
        return (
            <View style={container}>
                <Text style={{ color: '#473076' }}>{ content }</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={button} onPress={this.remove.bind(this)}>
                        <Text style={{ color: '#fff' }}>Xoa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={this.remove.bind(this)}>
                        <Text style={{ color: '#fff' }}>Sua</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { height: 100, backgroundColor: '#CFE2BC', margin: 10, padding: 10, justifyContent: 'space-between' },
    button:  { backgroundColor: '#5B4287', flex: 1, marginHorizontal: 10, alignItems: 'center', padding: 10, borderRadius: 5 }
});
