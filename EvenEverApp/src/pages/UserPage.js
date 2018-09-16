import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class UserPage extends Component {

    static navigationOptions = {
        title: 'User',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: 'tomato'
        },
        headerTintColor: '#FFEECC'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>User</Text>
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
