/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StatusModule from './src/native/android/modules/StatusModule';
import SeekBar from './src/component/seekbar/SeekBar';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    state = {
        isFullScreen: false,
        statusProgress: 0,
        navigationProgress: 0.
    }

    componentDidMount() {
        SplashScreen.hide();
        // this._setColor();
        // this._setNavigationBarColor();

    }

    _setLightMode = () => {
        StatusModule.setLightMode();
        // NativeModules.StatusModule.setLightMode();
    }

    _setDarkMode = () => {
        StatusModule.setDarkMode();
        // NativeModules.StatusModule.setDarkMode();
    }

    _setTransparent = () => {
        StatusModule.setTransparent();
    }

    _setColor = () => {
        StatusModule.setColor(this._getRandomColor(), this.state.statusProgress/100);
    }

    _setNavigationBarColor = () => {
        StatusModule.setNavigationBarColor(this._getRandomColor(), this.state.navigationProgress/100);
    }

    _transparentNavigationBar = () => {
        StatusModule.transparentNavigationBar();
    }

    _fullScreen = () => {
        if (!this.state.isFullScreen) {
            this._transparentNavigationBar();
            this._setTransparent();
        } else {
            this._setColor();
            this._setNavigationBarColor();
        }

        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
    }


    _getRandomColor = () => {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
            })('');
    }

    _onStatusBarChange = (a) => {
        StatusModule.setAlpha(a / 100);
        this.setState({
            statusProgress:a
        });
    }

    _onNavigationChange = (a) => {
        StatusModule.setNavigationAlpha(a / 100);
        this.setState({
            navigationProgress:a
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <View style={styles.button}>
                        <Button title="状态栏Dark" onPress={this._setLightMode}></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title="状态栏Light" onPress={this._setDarkMode}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button title="状态栏沉浸式" onPress={this._setTransparent}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button title="导航栏沉浸式" onPress={this._transparentNavigationBar}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button title="改变状态栏颜色" onPress={this._setColor}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button title="改变导航栏导栏颜色" onPress={this._setNavigationBarColor}></Button>
                    </View>

                    <View style={styles.button}>
                        <Button title={"全屏显示:" + this.state.isFullScreen} onPress={this._fullScreen}></Button>
                    </View>

                    <View style={{margin: 5, flex: 1}}>
                        <Text>状态栏透明度:{this.state.statusProgress}</Text>
                        <SeekBar style={{width: 200}} onProgressChange={this._onStatusBarChange} progress={0}></SeekBar>
                    </View>

                    <View style={{margin: 5, flex: 1}}>
                        <Text>导航栏透明度:{this.state.navigationProgress}</Text>
                        <SeekBar style={{width: 200}} onProgressChange={this._onNavigationChange}
                                 progress={0}></SeekBar>
                    </View>

                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        margin: 5
    }
});
