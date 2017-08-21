/**
 * Created by wukewei on 17/5/28.
 * @flow
 */

import {fromJS, List} from "immutable";
import * as types from "../constants/ActionTypes";
import type {ProjectEntity} from "../flowtype";

type State = {
  list: List<ProjectEntity>,
  hasMore: boolean,
  isLoading: boolean,
  isFist: boolean
}

const initialState: State = {
  list: List(),
  hasMore: true,
  isLoading: true,
  isFist: true
};

export const projectListReducer = (state: Object = fromJS(initialState), action: Object): State => {
  switch (action.type) {
    case types.PROJECT_LIST_STAET:
      console.log("projectListsStart", action.isFist);
      state = state.set('isLoading', true);
      state = state.set('isFist', action.isFist);
      return state;
    case types.PROJECT_LIST_SUCCESS:
      console.log("project list success!", action.isFist);
      state = state.get('isFist') ? state.set('list', List(action.list)) : state.set("list", state.get('list', List()).concat(List(action.list)));
      state = state.set('hasMore', action.hasMore);
      state = state.set('isLoading', false);
      return state;
    default:
      return state;
  }
};