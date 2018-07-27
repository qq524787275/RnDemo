import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import StatusBar from 'src/component/statusbar/StatusBar';
import StatusModule from 'src/native/android/modules/StatusModule';
import Icon from 'src/component/icon/Iconfont';
import LanguageStore from "src/store/LanguageStore";
import TabBarLabel from "src/component/tabbar/TabBarLabel";
import {observer} from "mobx-react";

@observer
export default class Person extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarIcon: ({tintColor}) => <Icon name={"wode"} size={20} color={tintColor}></Icon>,
        tabBarLabel: ({tintColor})=><TabBarLabel color={tintColor} position={2}/>,
        tabBarOnPress: ((sceneParams) => {
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            // sceneParams.jumpToIndex(sceneParams.scene.index);
            StatusModule.setLightMode();
            sceneParams.defaultHandler();
        })
    });


    componentDidMount() {
        // ToastAndroid.showWithGravity("12",ToastAndroid.SHOR,ToastAndroid.CENTER);
    }


    render() {
        let lang = LanguageStore.getInstance().lang.person;
        return (
            <View style={styles.container}>
                <StatusBar color={"#123456"}></StatusBar>
                <Text>{lang.title}</Text>
                <Button title="MakeltRain" onPress={()=>NAVIGATION.navigate("MakeItRainScreen")}></Button>
                <Button title="AnimatableExplorer" onPress={()=>NAVIGATION.navigate("AnimatableExplorerScreen")}></Button>
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
