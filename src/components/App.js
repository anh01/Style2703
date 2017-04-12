import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

StatusBar.setHidden(true);

class App extends Component {
    render() {
        const { wrapper, footer, header, body, titleStyle, iconStyle, profileStyle, imageHolder, imageContainer } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Image source={require('../media/back.png')} style={iconStyle} />
                    <Text style={titleStyle}>Nguyen Van Pho</Text>
                    <Image source={require('../media/search.png')} style={iconStyle} />
                </View>
                <View style={body}>
                    <Image source={require('../media/profile.png')} style={profileStyle} />
                    <Text style={{ fontSize: 20, color: '#fff' }}>Teacher</Text>
                    <Text style={{ fontSize: 20, color: '#235857' }}>Saigon, Vietnam</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch' }}>
                        <View style={imageContainer}>
                            <Image source={require('../media/phone.png')} style={iconStyle} />
                        </View>
                        <View style={imageContainer}>
                            <Image source={require('../media/message.png')} style={iconStyle} />
                        </View>
                        <View style={imageContainer}>
                            <Image source={require('../media/mail.png')} style={iconStyle} />
                        </View>
                        <View style={imageContainer}>
                            <Image source={require('../media/like.png')} style={iconStyle} />
                        </View>
                    </View>
                </View>
                <View style={footer}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#2DB389'
    },
    header: {
        flex: 1,
        backgroundColor: '#2DB389',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    body: {
        flex: 4,
        backgroundColor: '#2DB389',
        alignItems: 'center'
    },
    footer: {
        flex: 4,
        backgroundColor: '#FEFFFF'
    },
    titleStyle: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 25
    },
    imageHolder: {

    },
    iconStyle: {
        width: 30,
        height: 30
    },
    profileStyle: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    imageContainer: { 
        backgroundColor: '#269174', 
        height: 50, 
        width: 50, 
        borderRadius: 25, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});

export default App;
