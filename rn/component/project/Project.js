/**
 * Created by hzwukewei on 2017-5-27.
 */

import React, {Component} from "react";
import {Text, View, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import type {ProjectEntity} from "../../flowtype";
import LoadingView from "../widget/LoadingView";
import EmptyView from "../widget/EmptyView";
import {Colors} from "../../assets/Attrs";
import ListFooterView from "../widget/ListFooterView";

type Props = {
  list: Array<ProjectEntity>,
  hasMore: boolean,
  isLoading: boolean,
  projectListsCallback: (pn: number, popleGroup: string, sicknessStatus: string,
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
          <View style={[styles.itemHeader, {
            marginRight: 100
          }]}>
            <Text
              numberOfLines={1}
            >{item.sickness_name}</Text>
            <Text style={{marginLeft: 7}}>{item.sickness_type}</Text>
          </View>
          <View style={[styles.itemStatusBackGround,
            {backgroundColor: item.sickness_status ? '#F9B74E' : '#42BD41'},
            {borderColor: item.sickness_status ? '#F9B74E' : '#42BD41'}]}>
            <Text style={{fontSize: 9, color: Colors.windowBackgroundColor}}>
              {item.sickness_status ? "COMPLETE" : "UNDERWAY"}
            </Text>
          </View>

        </View>
        <Text
          numberOfLines={3}
          style={styles.itemTitle}>{item.experiment_title}</Text>
        <Text style={{marginTop: 5.5}}>申办方: {item.bid_name}</Text>
        <Text style={{marginTop: 2}}>研究药物: {item.drug_name}</Text>
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
    if (hasMore) {
      pageSize++;
      this.props.projectListsCallback(pageSize, null, null, null, null);
    }

  };

  _footerRender = () => {
    return <ListFooterView hasMore={this.props.hasMore}/>
  };

  _itemSeparatorComponent = () => {
    return <View style={{height: 10, backgroundColor: Colors.windowBackgroundColor}}/>
  };

  render() {
    const {list, isLoading} = this.props;
    console.log("render" + list);

    if (isLoading && list.length === 0) {
      return <LoadingView/>
    } else {
      return (
        <FlatList
          style={{backgroundColor: Colors.windowBackgroundColor}}
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
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 15.5,
    backgroundColor: Colors.whiteBackgroundColor

  },
  itemStatusBackGround: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
  },
  itemHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemTitle: {
    marginTop: 10,
    marginBottom: 5.5
  }
});

export default Project;