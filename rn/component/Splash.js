/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import React, {Component} from "react";
import {Dimensions, Image} from "react-native";
import NavigationUtil from '../utils/NavigationUtil';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      NavigationUtil.reset(this.props.navigation, 'Login');
    }, 2000);
  }

  render() {
    return (
      <Image
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: null,
          width: null,
        }}
        source={ require('../assets/ic_splash.png')}/>
    );
  }
}

export default Splash;