import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';

StatusBar.setHidden(true);

const { width, height } = Dimensions.get('window');

class App extends Component {
    render() {
        const { 
            wrapper, footer, header, body, 
            titleStyle, iconStyle, profileStyle, 
            imageContainer, sectionTitle, friendProfileStyle 
        } = styles;
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'stretch', paddingHorizontal: 40 }}>
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
                <View style={footer}>
                    <View style={{ flex: 5 }}>
                        <Text style={[sectionTitle, { marginBottom: 20 }]}>About me</Text>
                        <Text style={{ lineHeight: 30 }} numberOfLines={3} >Welcome to React Native! This page will help you install React Native on your system, so that you can build apps with it right away. If you already have React Native installed</Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'space-around' }}>
                        <Text style={sectionTitle}>Common friends</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../media/p1.jpg')} style={friendProfileStyle} />
                            <Image source={require('../media/p2.jpg')} style={friendProfileStyle}/>
                            <Image source={require('../media/p3.jpg')} style={friendProfileStyle}/>
                            <Image source={require('../media/p4.jpg')} style={friendProfileStyle}/>
                            <Image source={require('../media/p5.jpg')} style={friendProfileStyle}/>
                            <Image source={require('../media/p1.jpg')} style={friendProfileStyle} />
                            <Image source={require('../media/p2.jpg')} style={friendProfileStyle}/>
                        </View>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'space-between' }}>
                        <Text style={sectionTitle}>Hobbies</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ padding: 10, backgroundColor: '#D0D0D0', borderRadius: 10, overflow: 'hidden', marginRight: 10 }}>Hockey</Text>
                            <Text style={{ padding: 10, backgroundColor: '#D0D0D0', borderRadius: 10, overflow: 'hidden', marginRight: 10 }}>Design</Text>
                            <Text style={{ padding: 10, backgroundColor: '#D0D0D0', borderRadius: 10, overflow: 'hidden', marginRight: 10 }}>Fashion</Text>
                        </View>
                    </View>
                </View>
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
        flex: 7,
        backgroundColor: '#2DB389',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    footer: {
        flex: 7,
        backgroundColor: '#FEFFFF',
        padding: 10
    },
    titleStyle: {
        color: 'white',
        fontFamily: 'Avenir',
        fontSize: 25,
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
    },
    sectionTitle: {
        color: 'black',
        fontWeight: 'bold'
    },
    friendProfileStyle: {
        height: 40, width: 40, marginRight: 10
    }
});

export default App;
