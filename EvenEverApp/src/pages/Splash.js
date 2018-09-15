import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
// import NavigationUtil from '../utils/NavigationUtils';

export class Splash extends Component {
    constructor(props){
        super(props);

    }
    componentWillMount(){
        setTimeout(() => {
            // NavigationUtil.routerReset(this.props.navigation, 'Login');       
            this.props.navigation.navigate('Main'); 
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>EvenEver</Text>
                <Text style={styles.instructions}>A Great Memo</Text>
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
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

