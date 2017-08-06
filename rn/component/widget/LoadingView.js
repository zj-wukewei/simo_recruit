/**
 * Created by wukewei on 2017/8/6.
 */
import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Colors } from '../../assets/Attrs';

type Props = {
  text: string
}

export default class LoadingView extends Component {
  constructor(props: Props) {
    super(props);
  }
  _renderText = () => {
    if (this.props.text) {
      return <Text style={styles.text}>{this.props.text}</Text>;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          size="large"/>
        {this._renderText}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.colorPrimaryDark,
    fontSize: 15,
  }
});

