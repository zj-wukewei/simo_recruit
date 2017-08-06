/**
 * Created by wukewei on 17/5/28.
 */

import {dispatchResponse, projectLists, getStudyList} from "./api";
import * as types from "../constants/ActionTypes";

export const thunkGetProjectList = (pn: string, popleGroup: string, sicknessStatus: string,
                                    sicknessType: string, searchContent: string) => {
  return (dispatch: (action: Object) => void) => {
    dispatch(projectListsStart());
    return projectLists(pn, popleGroup, sicknessStatus, sicknessType, searchContent)
      .then(response =>
        dispatchResponse(response, dispatch, projectResponse)
      );
  }
};

const projectResponse = (projectResponse: SimoResponse) => {
  return {
    type: types.PROJECT_LIST_SUCCESS,
    list: projectResponse.data.list,
    hasMore: projectResponse.data.hasMore,
    isLoading: false
  }
};

const projectListsStart = () => {
  return {
    type: types.PROJECT_LIST_STAET,
    isLoading: true
  }
};