import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    View,
    TouchableHighlight,
    FlatList,
    Dimensions,
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const _Icon = createIconSetFromIcoMoon(icoMoonConfig);
const { width, height } = Dimensions.get('window');

export class MemoPage extends Component {
    constructor(props){
        super(props);
    }
    state = {
        fadeAnim: new Animated.Value(0),
    }
    static navigationOptions = {
        headerTitle: 'Memo',
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

    memoData = [
        { 
            "id": "memo1",
            "memoTitle": "title1",
            "memoMain": "main1",
        },{
            "id": "memo2",
            "memoTitle": "title2",
            "memoMain": "main2",
        },{
            "id": "memo3",
            "memoTitle": "title3",
            "memoMain": "main3",
        },{
            "id": "memo4",
            "memoTitle": "title4",
            "memoMain": "main4",
        },{
            "id": "memo5",
            "memoTitle": "title5",
            "memoMain": "main5",
        }
    ]

    memoCard = ({item}) => {
        console.log(item)
        return(
            <View style={styles.memoCard}>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.main}</Text>
            </View>
            
        )
    }

    render() {
        let { fadeAnim } = this.state;
        return (
            <View style={styles.container}>
                {/* <Animated.View style={[styles.container,{opacity: fadeAnim,}]}>
                    <Text style={styles.welcome} onPress={()=>{this.props.navigation.navigate('NewMemo')}}>EvenEver</Text>
                    <Text style={styles.instructions}>A Great Memo</Text>
                </Animated.View> */}
                
                <View style={styles.memoCardList}>
                    <FlatList 
                        keyExtractor={(index)=>{index.toString()}}

                        data={this.memoData}
                        renderItem={(item)=>this.memoCard(item)}
                    />
                </View>

                <TouchableHighlight
                    onPress={() => { this.props.navigation.navigate('NewMemo') }}
                >
                    <View style={styles.addMemo}>
                        <_Icon
                            name='pen'
                            size={28}
                            color='#FFEECC'
                        />
                    </View>
                </TouchableHighlight>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    addMemo: {
        position:'absolute',
        width: 46,
        height: 46,
        borderRadius: 46,
        shadowColor: '#333',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        backgroundColor: 'tomato',
        bottom: 20,
        right: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    memoCardList: {
        flex: 1,
    },
    memoCard: {
        height: 150,
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFEECC',
        borderRadius: 10,
    },
});
