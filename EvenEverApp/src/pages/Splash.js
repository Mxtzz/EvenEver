import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

export class Splash extends Component {
    constructor(props){
        super(props);
        // this.spinValue = new Animated.Value(0);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Main'); 
        }, 2000);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <SplashMain></SplashMain>
            </View>
        );
    }
}

export class SplashMain extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            (
            <View style={styles.container}>
                <Image source={require('../image/splash.jpg')} style={styles.backgroundImg}></Image>
                <View style={styles.title}>
                    <View style={{position:'relative'}}>
                        <Text style={styles.welcome}>Even Ever</Text>
                        <Text style={styles.version}>v0.0.1</Text>  
                    </View>
                </View> 
            </View>
            )
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#FFEECC',
    },
    backgroundImg:{
        height: height,
        width: width
    },
    title: {
        position:'absolute',
        paddingBottom: 80,
    },
    welcome: {
        fontStyle: 'italic',
        fontSize: 40,
        color:'#333',
        textAlign: 'center',
        paddingRight: 10,
    },
    version: {
        textAlign: 'center',
        color: '#333333',
        position:'absolute',
        right:-36,
    },
});

