import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class NewsPage extends Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title: 'News',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: 'tomato'
        },
        headerTintColor: '#FFEECC'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>News</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    
});
