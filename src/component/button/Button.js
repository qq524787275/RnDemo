import React from 'react';
import {Text, Button as B} from 'react-native';
import {observer} from 'mobx-react';
import PrimaryStore from 'src/store/PrimaryStore';
import PropTypes from "prop-types";

@observer
export default class Button extends React.Component {

    render() {

        const {color,...rest} = this.props;
        return (
            <B {...rest} color={!color?PrimaryStore.getInstance().colorPrimary:color}/>
        );
    }
}

Button.propTypes = {
    color: PropTypes.string,

}

Button.defaultProps = {

}
