import React from 'react';
import {StyleSheet, ScrollView, LayoutAnimation, ToastAndroid, TouchableNativeFeedback} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import StatusModule from 'src/native/android/modules/StatusModule';
import LanguageStore from "src/store/LanguageStore";
import TabBarLabel from 'src/component/tabbar/TabBarLabel';
import {observer} from "mobx-react";
import {View} from 'react-native-animatable';
import {getCartoonList} from 'src/http/okgo';
import {getRandomColor} from 'src/utils/ColorUtils';
import PrimaryStore from 'src/store/PrimaryStore';
import Button from 'src/component/button/Button';
import XButton from 'src/component/button/XButton';
import StatusBar from 'src/component/statusbar/StatusBar';
import {getBackgroundImage} from 'src/Data';
import Text from 'src/component/text/Text';

let label;
@observer
export default class Home extends React.Component {

    state = {
        width: 100,
        height: 100
    }

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarLabel: ({tintColor}) => <TabBarLabel ref={ref => label = ref} color={tintColor} position={0} size={20}
                                                   name={"shouye"}/>,
        tabBarOnPress: ((sceneParams) => {
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            // sceneParams.jumpToIndex(sceneParams.scene.index);
            label._startAnimation();
            sceneParams.defaultHandler();
        })
    });

    componentDidMount() {
        SplashScreen.hide();
        this.num = 0;
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

    _loadCartoonList = async () => {
        let result = await getCartoonList(0, 20, 1);
        ToastAndroid.showWithGravity(JSON.stringify(result), ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    _rubberBand = () => {
        this.band.animate("rubberBand");
    }

    _changeColorPrimary = () => {
        PrimaryStore.getInstance().usePrimaryColor(getRandomColor());
        console.log(NAVIGATION)
    }


    render() {

        let lang = LanguageStore.getInstance().lang.home;

        return (
            <View style={{flex: 1}}>
                <StatusBar/>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.item}>
                            <Button title="点击跳转" onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                        </View>
                        <View style={styles.item}>
                            <Button title="点击跳转" onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                        </View>
                        <View style={styles.item}>
                            <XButton title={"自定义按钮"}
                                     onPress={() => NAVIGATION.navigate('CartoonScreen')}/>
                        </View>
                        <View style={styles.item}>
                            <Button title="中文" onPress={() => LanguageStore.getInstance().useChinese()}/>
                        </View>
                        <View style={styles.item}>
                            <Button title="英文" onPress={() => LanguageStore.getInstance().useEnglish()}/>
                        </View>
                        <View style={[styles.box, {width: this.state.width, height: this.state.height}]}>
                            <TouchableNativeFeedback>
                                <View style={{flex: 1, justifyContent: "center", borderRadius: 1000}}>
                                    <Text style={{textAlign: 'center'}}>哈哈</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View style={styles.item}>
                            <Button title="点击放大动画" onPress={this._startBigAnimiation}/>
                        </View>
                        <View style={styles.item}>
                            <Button title="点击缩小动画" onPress={this._startSmallAnimiation}/>
                        </View>

                        <View style={styles.item}>
                            <Button title="下载网络数据" onPress={this._loadCartoonList}/>
                        </View>

                        <View ref={ref => this.band = ref} style={styles.item}>
                            <Button title="动画" onPress={this._rubberBand}/>
                        </View>

                        <View style={[styles.item, {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        }]}>
                            <Button title="dot 加" onPress={() => label.setNum(this.num += 5)}/>
                            <Button title="dot 减" onPress={() => label.setNum(this.num -= 5)}/>
                        </View>

                        <View style={[styles.item, {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        }]}>
                            <Button title="夜间模式" onPress={() => PrimaryStore.getInstance().isLight(true)}/>
                            <Button title="白天模式" onPress={() => PrimaryStore.getInstance().isLight(false)}/>
                        </View>

                        <View style={[styles.item, {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%"
                        }]}>
                            <Button title="设置App背景颜色"
                                    onPress={() => PrimaryStore.getInstance().useAppBackground(getRandomColor())}/>
                            <Button title="默认" onPress={() => PrimaryStore.getInstance().useAppBackground("#f3f3f3")}/>
                            <Button title="设置App背景图片"
                                    onPress={() => PrimaryStore.getInstance().useAppBackground(getBackgroundImage())}/>
                        </View>


                        <View style={styles.item}>
                            <Button title="随机一个颜色主题" onPress={this._changeColorPrimary}/>
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
            </View>
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
        backgroundColor: "red",
        borderRadius: 1000,
    }
});
