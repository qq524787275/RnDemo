import React from 'react';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import {ToastAndroid} from 'react-native';
import MainTab from 'src/MainTab';
import Cartoon from 'src/pages/Cartoon';
import MakeItRain from 'src/example/makeItrain/MakeItRain';
import AnimatableExplorer from 'src/example/animatableexplorer/AnimatableExplorer';
// import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
const Stack = createStackNavigator(
    {
        MainTabScreen: {
            screen: MainTab
        },
        CartoonScreen: {
            screen: Cartoon
        },
        MakeItRainScreen: {
            screen: MakeItRain
        },
        AnimatableExplorerScreen: {
            screen: AnimatableExplorer
        }
    },
    {
        navigationOptions: {
            header: null
        },
        cardStyle: {
            backgroundColor: "transparent",
        },
        transitionConfig: () => ({
            // screenInterpolator: StackViewStyleInterpolator.forHorizontal,
            transitionSpec: {
                duration: 150
            }
        })
    }
)

let startClick=0;
const AppNavigator = getStateForAction => (action, state) => {
    const {type, routeName} = action;
    if (state) {
        if (type === NavigationActions.NAVIGATE && routeName === state.routes[state.routes.length - 1].routeName) {        // 路由跳转
            return state;
        } else if (type === NavigationActions.BACK) {
            if (state.routes.length === 1) { //退出程序
                let endClick=(new Date().valueOf());
                if(endClick-startClick>2000){
                    startClick=endClick;
                    ToastAndroid.showWithGravity("再按一次退出",ToastAndroid.SHORT,ToastAndroid.CENTER)
                    return null;
                }
                console.log("Android返回键")
            } else {// 返回界面回调
                console.log("ios侧滑回调、安卓返回回调")
            }
        }
    }
    return getStateForAction(action, state);
};

Stack.router.getStateForAction = AppNavigator(Stack.router.getStateForAction)

export default Stack;