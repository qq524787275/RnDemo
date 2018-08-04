import React from 'react';
import {StyleSheet, Text as T} from 'react-native';
import {observer} from 'mobx-react';
import PrimaryStore from 'src/store/PrimaryStore';
import PropTypes from "prop-types";

@observer
export default class Text extends React.Component {


    render() {
        let sm=PrimaryStore.getInstance().styleMode;
        const {style,...rest} =this.props;
        return (
                <T {...rest} style={[style,{color:sm.textColorPrimary}]} />
        );
    }
}

Text.propTypes = {}

Text.defaultProps = {}


const styles = StyleSheet.create({
    container: {
    },
});