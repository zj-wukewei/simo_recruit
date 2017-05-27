/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Image} from "react-native";

export default class TabBarItem extends Component {
    render() {
        return (
            <Image
                source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
                style={{
                    tintColor: this.props.tintColor,
                    width: 25,
                    height: 25
                }}
            />
        )
    }
}