/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Text, Image} from "react-native";
import TabBarItem from '../widget/TabBarItem';

class Project extends Component {

    static navigationOptions = {
        title: '项目',
        tabBarIcon: ({tintColor }) => (
        <Image
            source={require('../../assets/home.png')}
            style={[{  width: 25,
                height: 25}, {tintColor: tintColor}]}
        />
        )
    };

    render() {
        return (
            <Text>
                this is a project
            </Text>
        )
    }
}

export default Project;