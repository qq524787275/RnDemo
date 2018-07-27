import React from 'react';
import {
    NativeModules,
} from 'react-native';
import Main from './Main';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {
    render() {
        return (
            <Main/>
        );
    }
}
