import React, {Component} from 'react'
import {
    requireNativeComponent, View
} from 'react-native'

import PropTypes from "prop-types";

class SeekBar extends Component {
    static propTypes = {
        ...View.propTypes,
        onProgressChange: PropTypes.func,
        progress: PropTypes.number,
        max: PropTypes.number
    }

    static defaultProps = {
        progress: 50,
        max: 100
    }

    _onChange = (event) => {
        if (!this.props.onProgressChange) {
            return;
        }
        this.props.onProgressChange(event.nativeEvent.progress);
    }
    render() {
        return <RCTSeekBar  {...this.props} onChange={this._onChange}></RCTSeekBar>
    }
}


var RCTSeekBar = requireNativeComponent('RNSeekBar', SeekBar, {
    validAttributes: {
        progress: true,
        max: true
    },
    nativeOnly: {
        onChange: true,
    }
});

module.exports = SeekBar;
