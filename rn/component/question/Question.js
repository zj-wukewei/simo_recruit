/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Text, Image} from "react-native";

class Question extends Component {

    static navigationOptions = {
        title: '问答',
        tabBarIcon: ({focused, tintColor}) => (
            <Image
                source={require('../../assets/question.png')}
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
                this is a Question
            </Text>
        )
    }
}

export default Question;