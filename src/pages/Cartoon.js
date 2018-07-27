import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StatusBar from 'src/component/statusbar/StatusBar';
import StatusModule from "src/native/android/modules/StatusModule";
import Icon from 'src/component/icon/Iconfont';
import {observer} from "mobx-react";
import LanguageStore from "src/store/LanguageStore";
import TabBarLabel from "src/component/tabbar/TabBarLabel";
@observer
export default class Cartoon extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarIcon: ({tintColor}) => <Icon name={"dongwu"} size={20} color={tintColor}></Icon>,
        tabBarLabel: ({tintColor})=><TabBarLabel color={tintColor} position={1}/>,
        tabBarOnPress: ((sceneParams) => {
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            // sceneParams.jumpToIndex(sceneParams.scene.index);
            StatusModule.setDarkMode();
            sceneParams.defaultHandler();
        })
    });


    render() {
        let lang=LanguageStore.getInstance().lang.cartoon;
        return (
            <View style={styles.container}>
                <StatusBar  color={"#ffffff"}></StatusBar>
                <Text>{lang.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});
