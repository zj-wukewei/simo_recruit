/**
 * Created by wukewei on 17/5/28.
 * @flow
 */

import {fromJS, List} from "immutable";
import * as types from "../constants/ActionTypes";
import type {Project} from "../flowtype";

type State = {
  list: Array<Project>,
  hasMore: boolean
}

const initialState = {
  list: List,
  hasMore: true
};

export const projectListReducer = (state: Object = fromJS(initialState), action: Object): State => {
  switch (action.type) {
    case types.PROJECT_LIST_SUCCESS:
      console.log("project list success!");
      state = state.set("list", state.get('list', List()).concat(List(action.list)));
      return state;
    default:
      return state;
  }
};