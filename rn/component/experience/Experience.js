/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";

class Experience extends Component {
    static navigationOptions = {
        title: '经验',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                source={require('../../assets/experience.png')}
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
                this is a Experience
            </Text>
        )
    }
}

export default Experience;