import React from 'react';
import {
    View,
} from 'react-native';
import Main from './Main';
import AppBackground from './AppBackground';
import {init} from './Global'


init();

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AppBackground></AppBackground>
                <Main/>
            </View>
        );
    }
}
