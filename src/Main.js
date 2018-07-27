import React from 'react';
import {createStackNavigator} from 'react-navigation';
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
        MakeItRainScreen:{
            screen:MakeItRain
        },
        AnimatableExplorerScreen:{
            screen:AnimatableExplorer
        }
    },
    {
        navigationOptions: {
            header: null
        },
        transitionConfig: () => ({
            // screenInterpolator: StackViewStyleInterpolator.forHorizontal,
            transitionSpec: {
                duration: 150
            }
        })
    }
)
export default Stack;