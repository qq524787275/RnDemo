import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {observer} from 'mobx-react';
import PrimaryStore from 'src/store/PrimaryStore';
import {isColor} from 'src/utils/ColorUtils';

@observer
export default class AppBackground extends React.Component {

    render() {
        let background = PrimaryStore.getInstance().appBackground;
        return (
            <View style={styles.container}>
                {
                    isColor(background) ?
                        <View style={[styles.container, {backgroundColor: background}]}/>
                        :
                        <Image style={[styles.container]}
                               source={{uri:background}}/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});