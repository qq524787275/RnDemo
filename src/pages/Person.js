import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatusBar from 'src/component/statusbar/StatusBar';
import StatusModule from 'src/native/android/modules/StatusModule';
import Icon from 'src/component/icon/Iconfont';
import LanguageStore from "src/store/LanguageStore";
import TabBarLabel from "src/component/tabbar/TabBarLabel";
import {observer} from "mobx-react";
import Text from 'src/component/text/Text';
import Button from 'src/component/button/Button';

let label;
@observer
export default class Person extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => ({
        tabBarLabel: ({tintColor}) => <TabBarLabel ref={ref => label = ref} color={tintColor} position={2} size={20} name={"wode"}/>,
        tabBarOnPress: ((sceneParams) => {
            // 只有调用jumpToIndex方法之后才会真正的跳转页面。
            // sceneParams.jumpToIndex(sceneParams.scene.index);
            label._startAnimation();
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
                <StatusBar></StatusBar>
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
