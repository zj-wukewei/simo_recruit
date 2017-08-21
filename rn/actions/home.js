/**
 * Created by wukewei on 17/5/28.
 */

import {dispatchResponse, projectLists, getStudyList} from "./api";
import * as types from "../constants/ActionTypes";

export const thunkGetProjectList = (pn: number, popleGroup: string, sicknessStatus: string,
                                    sicknessType: string, searchContent: string) => {
  return (dispatch: (action: Object) => void) => {
    dispatch(projectListsStart(pn));
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
  }
};

const projectListsStart = (pn: number) => {
  return {
    type: types.PROJECT_LIST_STAET,
    isFist: pn === 0
  }
};