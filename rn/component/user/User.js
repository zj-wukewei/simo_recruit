/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Image, Text} from "react-native";

class User extends Component {
    static navigationOptions = {
        title: '个人',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                source={require('../../assets/my.png')}
                style={[{
                    width: 24,
                    height: 24
                }, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return (
            <Text>
                this is a User
            </Text>
        )
    }
}

export default User;