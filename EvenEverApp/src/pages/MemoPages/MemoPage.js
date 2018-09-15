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

export class MemoPage extends Component {
    constructor(props){
        super(props);
    }
    state = {
        fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    }
    static navigationOptions = {
        title: 'MemoPage',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: 'tomato'
        },
        headerTintColor: '#FFEECC'
    };
    
    componentDidMount() {
        Animated.timing(                  // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
              toValue: 1,                   // 透明度最终变为1，即完全不透明
              duration: 1000,              // 让动画持续一段时间
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
