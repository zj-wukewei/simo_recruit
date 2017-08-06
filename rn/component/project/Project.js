/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Text, View, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import type {ProjectEntity} from "../../flowtype";
import LoadingView from "../widget/LoadingView";
import EmptyView from "../widget/EmptyView";
import ListFooterView from "../widget/ListFooterView";

type Props = {
  list: Array<ProjectEntity>,
  hasMore: boolean,
  isLoading: boolean,
  projectListsCallback: (pn: string, popleGroup: string, sicknessStatus: string,
                        sicknessType: string, searchContent: string) => void
};

let pageSize: number = 0;

class Project extends Component {


  constructor(props: Props) {
    super(props);
    this.state = {
      pageSize: 0
    }
  }

  componentDidMount() {
    this.props.projectListsCallback(pageSize, null, null, null, null)
  }


  _renderItem = ({item}) => {
    return (
      <View style={styles.itemBackGround}>
        <View style={styles.itemHeader}>
          <Text>{item.sickness_name}</Text>
          <Text>{item.sickness_type}</Text>
        </View>
      </View>
    )
  };

  _keyExtractor = (item, index) => item.project_id;

  _onRefresh = () => {
    pageSize = 0;
    this.props.projectListsCallback(pageSize, null, null, null, null)
  };

  _onEndReached = () => {
    const {hasMore} = this.props;
    if(hasMore) {
      pageSize++;
      this.props.projectListsCallback(pageSize, null, null, null, null);
    }

  };

  _footerRender = () => {
    return <ListFooterView hasMore={this.props.hasMore}/>
  };

  _itemSeparatorComponent = () => {
    return <View style={{height: 10, backgroundColor: '#BDBDBD'}}/>
  };

  render() {
    const {list, isLoading} = this.props;
    console.log("render" + list);

    if (isLoading && list.length === 0) {
      return <LoadingView/>
    } else {
      return (
        <FlatList
          data={list}
          onRefresh={this._onRefresh}
          keyExtractor={this._keyExtractor}
          refreshing={false}
          ListFooterComponent={this._footerRender}
          ListEmptyComponent={EmptyView}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          onEndReached={this._onEndReached}
          renderItem={this._renderItem}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  itemBackGround: {
    flex: 1,
    margin: 15
  },
  itemHeader: {
    flexDirection: 'row'
  }
});

export default Project;