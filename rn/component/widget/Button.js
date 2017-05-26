/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import React, {PropTypes} from "react";
import {Text, View, ViewPropTypes} from "react-native";
import NativeTouchable from "./NativeTouchable";

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: ViewPropTypes.style,
    text: PropTypes.string,
};

const Button = ({
                    onPress,
                    disabled,
                    style,
                    containerStyle,
                    text,
                }) => (
    <NativeTouchable
        onPress={onPress}
        disabled={disabled}>
        <View style={containerStyle}>
            <Text style={style}>
                {text}
            </Text>
        </View>
    </NativeTouchable>
);

Button.propTypes = propTypes;

Button.defaultProps = {
    onPress() {
    },
    disabled: false,
    activeOpacity: 1
};

export default Button;