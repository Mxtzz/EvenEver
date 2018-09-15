import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const _Icon = createIconSetFromIcoMoon(icoMoonConfig);

export class NewMemo extends Component {
    constructor(props){
        super(props);
    }
    state = {
        fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    }
    static navigationOptions = {
        headerTitle: 'NewMemo',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: 'gray'
        },
        headerTintColor: '#FFEECC',
    };

    componentWillMount(){

    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={()=>{this.props.navigation.navigate('Main')}}>EvenEver</Text>
                <Text style={styles.instructions}>New Memo</Text>
                
            </View>
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
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    
});
