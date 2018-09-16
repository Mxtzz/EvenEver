import React, { Component } from 'react';
import {
} from 'react-native';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const _Icon = createIconSetFromIcoMoon(icoMoonConfig);

import {
    createStackNavigator,
    createBottomTabNavigator,
    SwitchNavigator,
} from 'react-navigation';

import { Splash } from '../pages/Splash';

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

import { MemoPage } from '../pages/MemoPages/MemoPage';
import { NewMemo } from '../pages/MemoPages/NewMemo';
import { UserPage } from '../pages/UserPage';
import { NewsPage } from '../pages/NewsPage';

const SignIn = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
    },
    {
        initialRouteName: 'Login',
    }
)

const MemoStack = createStackNavigator(
    {
        Memo: {
            screen: MemoPage,
        }
    },
    {
        initialRouteName: 'Memo'
    }
);

const NewsStack = createStackNavigator(
    {
        News: {
            screen: NewsPage,
            navigationOptions: {
                title: 'NewsPage',
            },
        }
    },
    {
        initialRouteName: 'News'
    }
);

const UserStack = createStackNavigator(
    {
        User: {
            screen: UserPage,
            navigationOptions: {
                title: 'UserPage',
            },
        }
    },
    {
        initialRouteName: 'User'
    }
)

const TabPage = createBottomTabNavigator(
    {
        Memo: { 
            screen: MemoStack,
        },
        News: NewsStack,
        User: UserStack,
    },{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Memo') {
                    iconName = 'home'
                } else if (routeName === 'News') {
                    iconName = 'heart'
                }else if(routeName === 'User'){
                    iconName = 'baffled'
                }
                return <_Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            tabStyle: {
                backgroundColor: '#FFEECC'
            },
        },
    }
);

const MainStack = createStackNavigator(
    {
        TabPage: {   
            screen: TabPage,
            navigationOptions:{
                header: null
            }
        },
        NewMemo: { 
            screen: NewMemo,
        },
    },
    
)

const App = SwitchNavigator(
    {
        Splash: Splash,
        SignIn: SignIn,
        Main: MainStack,
    },
    {
        initialRouteName: 'Splash',
    }
);

export default App;
