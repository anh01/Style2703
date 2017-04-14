import React from 'react';
import { View, Text } from 'react-native';

const Add = (props) => (
    <View style={{ flex: 1, backgroundColor: '#35558A' }}>
        <Text>{ props.soA + props.soB }</Text>
    </View>
);

export default Add;
