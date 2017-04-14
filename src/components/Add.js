import React from 'react';
import { View, Text } from 'react-native';

const Add = (props) => (
    <View style={{ flex: 1, backgroundColor: '#35558A', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 30 }}>{ props.soA + props.soB }</Text>
    </View>
);

export default Add;
