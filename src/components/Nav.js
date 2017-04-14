import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Form from './Form';
import Add from './Add';

export default class Nav extends Component {
    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'FORM' }}
                renderScene={(route, navigator) => {
                    if (route.name === 'FORM') return <Form navigator={navigator} />;
                    return <Add soA={route.soA1} soB={route.soB} navigator={navigator} />;
                }}
            />
        );
    }
}
