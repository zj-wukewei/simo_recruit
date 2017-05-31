/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import React, {Component}from 'react';
import {Platform} from 'react-native';
import {
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
let NativeTouchable = TouchableHighlight;
if (Platform.OS === 'android') {
  NativeTouchable = TouchableNativeFeedback;
}
export default NativeTouchable;