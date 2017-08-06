/**
 * Created by wukewei on 2017/8/6.
 */
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Colors } from '../../assets/Attrs';

export default class EmptyView extends Component {
  constructor(props: Props) {
    super(props);
  }
  _renderText = () => {
    if (this.props.text) {
      return <Text style={styles.text}>暂无数据</Text>;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
          }}/>
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

