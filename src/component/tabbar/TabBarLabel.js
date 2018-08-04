import React from 'react';
import {StyleSheet, TouchableNativeFeedback} from 'react-native';
import PropTypes from "prop-types";
import LanguageStore from "src/store/LanguageStore";
import {observer} from 'mobx-react'
import {Text, View} from 'react-native-animatable';
import Icon from 'src/component/icon/Iconfont';
import PrimaryStore from 'src/store/PrimaryStore';
import {action, observable} from "mobx";

@observer
export default class TabBarLabel extends React.Component {


    @observable num = 0;

    @action setNum(num){
        this.num=num;
    }

    _startAnimation = () => {
        this.view.animate("rubberBand");
    }

    render() {

        const {color, position, name, size, } = this.props;
        let sm = PrimaryStore.getInstance().styleMode;
        let lang, tintColor;
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

        if (color === "#00") {
            tintColor = PrimaryStore.getInstance().colorPrimary;
        } else {
            tintColor = color;
        }

        return (
            <View style={[styles.root,{backgroundColor:sm.bottomBackground}]}>
                <View  ref={ref => this.view = ref}>
                <View>
                    <Icon name={name} size={size} color={tintColor} style={styles.icon}></Icon>
                    {
                        this.num != 0 ? <View style={styles.dot}>
                            <Text style={[styles.font, {color: "#ffffff"}]}>{this.num<=99?this.num:99}</Text>
                        </View> : null
                    }
                </View>
                <Text style={[styles.font, {color: tintColor}]}
                      animation={"rubberBand"}>{lang.title}</Text>
                </View>
            </View>
        );
    }
}

TabBarLabel.propTypes = {
    color: PropTypes.string,
    position: PropTypes.number,
    name: PropTypes.string,
    size: PropTypes.number,
}

TabBarLabel.defaultProps = {
    color: "#123456",
    position: 0,
    name: "",
    size: 20,
}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        justifyContent: "center"
    },
    font: {
        fontSize: 10, textAlign: "center"
    },
    icon: {
        textAlign: "center",
    },
    dot: {
        position: "absolute",
        right: "30%",
        borderRadius: 8,
        width: 16,
        height: 16,
        paddingTop: 1,
        backgroundColor: "red"
    }
});
