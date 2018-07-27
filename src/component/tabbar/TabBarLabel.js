import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import LanguageStore from "../../store/LanguageStore";
import {observer} from 'mobx-react'
import {Text} from 'react-native-animatable';
@observer
export default class TabBarLabel extends React.Component {

    render() {

        const {color, position} = this.props;
        let lang;
        switch (position) {
            case 0:
                lang = LanguageStore.getInstance().lang.home;
                break;
            case 1:
                lang = LanguageStore.getInstance().lang.cartoon;
                break;
            case 2:
                lang = LanguageStore.getInstance().lang.person;
                break
            default:
                lang = LanguageStore.getInstance().lang.home;
                break
        }

        return (
            <Text  style={[styles.font, {color: color}]} animation={"rubberBand"}>{lang.title}</Text>
        );
    }
}

TabBarLabel.propTypes = {
    color: PropTypes.string,
    position: PropTypes.number
}

TabBarLabel.defaultProps = {
    color: "#123456",
    position: 0
}

const styles = StyleSheet.create({
    font: {
        fontSize: 13, textAlign: "center", paddingBottom: 5
    },
});
