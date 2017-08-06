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
  hasMore: boolean
}

export default class ListFooterView extends Component {
  constructor(props: Props) {
    super(props);
  }
  _renderText = () => {
      return <Text style={styles.text}>{this.props.hasMore ? "正在加载..." : "已全部加载"}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={this.props.hasMore}
          size="small"/>
          <Text style={styles.text}>{this.props.hasMore ? "正在加载..." : "已全部加载"}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginLeft: 8,
    color: Colors.colorPrimaryDark,
    fontSize: 12,
  }
});

