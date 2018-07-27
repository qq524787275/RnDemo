import React from 'react';
import {View, StatusBar as status,} from 'react-native';
import StatusModule from 'src/native/android/modules/StatusModule';
import Color from 'color';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";

@observer
export default class StatusBar extends React.Component {

    _autoStatusMode() {
        this.render();
    }

    render() {
        const {color} = this.props;
        Color(color).isLight() ? StatusModule.setDarkMode() : StatusModule.setLightMode()
        return (
            <View style={{width: "100%", height: status.currentHeight, backgroundColor: color}}></View>
        );
    }
}

StatusBar.defaultProps = {
    color: "#000000",
}

StatusBar.propTypes = {
    color: PropTypes.string,
}