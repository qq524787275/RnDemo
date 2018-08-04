import React from 'react';
import {View, StatusBar as status,} from 'react-native';
import StatusModule from 'src/native/android/modules/StatusModule';
import Color from 'color';
import PrimaryStore from 'src/store/PrimaryStore';
import PropTypes from 'prop-types';
import {observer} from "mobx-react";

@observer
export default class StatusBar extends React.Component {

    state={
        isDark:null,
    }

    _autoStatusMode() {
        this.render();
    }

    render() {
        const {color} = this.props;
        let colorPrimary=!color?PrimaryStore.getInstance().colorPrimary:color;
        Color(colorPrimary).isLight() ? StatusModule.setDarkMode() : StatusModule.setLightMode()
        return (
            <View style={{width: "100%", height: status.currentHeight, backgroundColor: colorPrimary}}></View>
        );
    }
}

StatusBar.propTypes = {
    color: PropTypes.string,
}


