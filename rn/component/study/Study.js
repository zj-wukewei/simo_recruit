/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";

class Study extends Component {
    static navigationOptions = {
        title: '学习',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                source={require('../../assets/study.png')}
                style={[{
                    width: 25,
                    height: 25
                }, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <Text>
                this is a Study
            </Text>
        )
    }
}

export default Study;