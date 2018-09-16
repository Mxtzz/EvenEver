import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const _Icon = createIconSetFromIcoMoon(icoMoonConfig);

export class MemoPage extends Component {
    constructor(props){
        super(props);
    }
    state = {
        fadeAnim: new Animated.Value(0),
    }
    static navigationOptions = {
        headerTitle: 'MemoPage',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: 'tomato'
        },
        headerTintColor: '#FFEECC',
    };
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
              toValue: 1,
              duration: 1000,
            }
          ).start(); 
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View style={[styles.container,{opacity: fadeAnim,}]}>
                <Text style={styles.welcome} onPress={()=>{this.props.navigation.navigate('NewMemo')}}>EvenEver</Text>
                <Text style={styles.instructions}>A Great Memo</Text>
                
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEECC',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    
});
