/**
 * Created by wukewei on 17/5/28.
 * @flow
 */

import React, {Component} from 'react';
import {Image} from "react-native";
import {connect} from 'react-redux';
import Project from '../component/project/Project';
import {
  thunkGetProjectList
} from '../actions/home';


class ProjectContainers extends Component {

  static navigationOptions = {
    title: '项目',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/home.png')}
        style={[{
          width: 25,
          height: 25
        }, {tintColor: tintColor}]}
      />
    )
  };

  render() {
    return (
      <Project {...this.props}/>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.get('projectListReducer').get('list'),
    hasMore: state.get('projectListReducer').get('hasMore'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    projectListCallback: (pn: string, popleGroup: string, sicknessStatus: string,
                          sicknessType: string, searchContent: string) => {
      dispatch(thunkGetProjectList(pn, popleGroup, sicknessStatus, sicknessType, searchContent));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainers);