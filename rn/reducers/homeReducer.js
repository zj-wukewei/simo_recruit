/**
 * Created by wukewei on 17/5/28.
 * @flow
 */

import {fromJS, List} from "immutable";
import * as types from "../constants/ActionTypes";
import type {ProjectEntity} from "../flowtype";

type State = {
  list: Array<ProjectEntity>,
  hasMore: boolean,
  isLoading: boolean,
}

const initialState = {
  list: List(),
  hasMore: true,
  isLoading: true
};

export const projectListReducer = (state: Object = fromJS(initialState), action: Object): State => {
  switch (action.type) {
    case types.PROJECT_LIST_STAET:
      state = state.set('isLoading', action.isLoading);
      return state;
    case types.PROJECT_LIST_SUCCESS:
      console.log("project list success!");
      state = state.set("list", state.get('list', List()).concat(List(action.list)));
      state = state.set('hasMore', action.hasMore);
      state = state.set('isLoading', action.isLoading);
      return state;
    default:
      return state;
  }
};