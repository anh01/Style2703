import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const button = { 
    backgroundColor: '#5B4287', 
    flex: 1, 
    marginHorizontal: 10, 
    alignItems: 'center', 
    padding: 10, 
    borderRadius: 5 
};


export default class Controll extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={button}>
                    <Text style={{ color: '#fff' }}>Luu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button}>
                    <Text style={{ color: '#fff' }}>Huy</Text>
                </TouchableOpacity>
            </View>            
        );
    }
}
