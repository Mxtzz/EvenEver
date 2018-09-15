import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export class Splash extends Component {
    constructor(props){
        super(props);
        // this.spinValue = new Animated.Value(0);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Main'); 
        }, 1000);
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
                <Text style={styles.welcome} onPress={()=>{this.props.navigation.navigate('Main')}}>EvenEver</Text>
                <Text style={styles.instructions}>A Great Memo</Text>
                <Text style={styles.version}>v0.0.1</Text>
            </View>
            )
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFEECC',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    version: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 150,
    },
});

