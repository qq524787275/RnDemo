import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import PropTypes from "prop-types";
import PrimaryStore from "src/store/PrimaryStore";
import {observer} from 'mobx-react';

@observer
export default class XButton extends React.Component {

    render() {
        const {title, color, fontColor, onPress,borderRadius,backgroundColor, ...rest} = this.props;

        return (
            <TouchableNativeFeedback onPress={onPress}
                                     background={TouchableNativeFeedback.Ripple(!color ? PrimaryStore.getInstance().colorPrimary : color, true)}
                                     useForeground={true}>
                <View  {...rest} style={{borderRadius:borderRadius,backgroundColor:backgroundColor}}>
                        <Text style={[styles.title, {color: fontColor}]}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

XButton.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontColor: PropTypes.string,
    onPress: PropTypes.func,
    borderRadius:PropTypes.number,
    backgroundColor:PropTypes.string
}

XButton.defaultProps = {
    fontColor: "#666",
    borderRadius:3,
    backgroundColor:"#fff"
}


const styles = StyleSheet.create({
    title: {
        padding: 10
    },
});