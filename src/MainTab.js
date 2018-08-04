import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Home from 'src/pages/Home';
import Person from 'src/pages/Person';
import Cartoon from 'src/pages/Cartoon';

const BottomTab = createBottomTabNavigator({
        HomeScreen: Home,
        Cartoon: Cartoon,
        PersonScreen: Person
    },
    {
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        scrollEnabled: false,
        backBehavior: 'none',
        tabBarPosition: 'bottom',
        initialRouteName: 'HomeScreen',
        tabBarOptions: {
            activeTintColor: "#00",
            inactiveTintColor: '#666',
            showIcon: true,
            indicatorStyle: {
                height: 0
            },
            style: {
                backgroundColor: '#fff',
                height: Platform.OS === 'android' ? 49 : 49
            },
            labelStyle: {
                fontSize: 12,
            }
        },
        cardStyle:{
            backgroundColor:"red"
        }
    });

export default class MainTab extends React.Component {

    constructor(props, context) {
        super(props, context);
        global.NAVIGATION = this.props.navigation;      // 全局跳转对象
    }

    render() {
        return (
            <BottomTab/>
        );
    }
}
