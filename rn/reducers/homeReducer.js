/**
 * Created by wukewei on 17/5/28.
 */

import {fromJS, List} from "immutable";
import * as types from "../constants/ActionTypes";

const initialState = {
  list: List,
  hasMore: true
};

export const projectListReducer = (state: Object = fromJS(initialState), action: Object) => {
    switch (action.type) {
      case types.PROJECT_LIST_SUCCESS:
        console.log("project list success!");
        state = state.set("list", state.get('list', List()).concat(List(action.list)));
        return state;
      default:
        return state;
    }
};