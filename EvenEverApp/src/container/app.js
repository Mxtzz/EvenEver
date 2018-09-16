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

const TabPage = createBottomTabNavigator(
    {
        Memo: MemoPage,
        News: NewsPage,
        User: UserPage,
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
                // backgroundColor: 'gray'
            },
        },
        
    }
);

const MainStack = createStackNavigator(
    {
        TabPage: TabPage,
        MemoPage: MemoPage,
        NewMemo: NewMemo,
    },
    {
        navigationOptions: {
            title: 'MemoPage',
            headerBackTitle: '',
            headerStyle: {
                backgroundColor: 'tomato'
            },
            headerTintColor: '#FFEECC'
        }
    }
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
