import React from 'react';
import {StyleSheet, Text, Button, ScrollView, LayoutAnimation} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StatusModule from 'src/native/android/modules/StatusModule';
import Icon from 'src/component/icon/Iconfont';
import LanguageStore from "src/store/LanguageStore";
import TabBarLabel from 'src/component/tabbar/TabBarLabel';
import {observer} from "mobx-react";
import {View} from 'react-native-animatable';

@observer
export default class Home extends React.Component {

    state = {
        width: 100,
        height: 100
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarIcon: ({tintColor}) => {return (<View ref={ref=>this.icon=ref} animation={"rubberBand"}><Icon name={"shouye"} size={20} color={tintColor}></Icon></View>)},
        tabBarLabel: ({tintColor}) =><TabBarLabel ref={ref=>this.label=ref} color={tintColor} position={0}/>,
        tabBarOnPress: ((sceneParams) => {
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            // sceneParams.jumpToIndex(sceneParams.scene.index);
            StatusModule.setDarkMode();
            sceneParams.defaultHandler();
            this.icon.setNativeProps({
                style: {
                    zIndex: 1,
                },
            });

        })
    });

    componentDidMount() {
        SplashScreen.hide();
        StatusModule.setDarkMode();
    }

    _startBigAnimiation = () => {
        LayoutAnimation.spring();
        this.setState({
            width: this.state.width + 15,
            height: this.state.height + 15
        })
    }

    _startSmallAnimiation = () => {
        LayoutAnimation.spring();
        this.setState({
            width: this.state.width - 15,
            height: this.state.height - 15
        })
    }

    render() {

        let lang = LanguageStore.getInstance().lang.home;

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Button title="点击跳转" onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                    </View>
                    <View style={styles.item}>
                        <Button title="点击跳转" onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                    </View>
                    <View style={styles.item}>
                        <Button title="点击跳转" onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                    </View>
                    <View style={styles.item}>
                        <Button title="中文" onPress={() => LanguageStore.getInstance().useChinese()}/>
                    </View>
                    <View style={styles.item}>
                        <Button title="英文" onPress={() => LanguageStore.getInstance().useEnglish()}/>
                    </View>
                    <View style={[styles.box, {width: this.state.width, height: this.state.height}]}/>

                    <View style={styles.item}>
                        <Button title="点击放大动画" onPress={this._startBigAnimiation}/>
                    </View>
                    <View style={styles.item}>
                        <Button title="点击缩小动画" onPress={this._startSmallAnimiation}/>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text>{lang.title}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        margin: 5
    },
    box: {
        backgroundColor: "red"
    }
});
