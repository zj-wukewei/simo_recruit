/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import axios from "axios";
import {Dimensions, Platform} from "react-native";
import TokenManager from "../stores/token";
import * as types from "../constants/ActionTypes";
import type {Response, SimoResponse} from "../flowtype";
import ToastUtil from "../utils/ToastUtil";

const dimensions = Dimensions.get('window');
const client = axios.create({
  baseURL: 'http://192.168.3.19:8086/simo',
  timeout: 20000,
  headers: {
    'APP-ID': Platform.OS === 'android' ? '2' : '1',
    'APP-MODEL': Platform.OS === 'android' ? 'android' : 'ios',
    'APP-VERSION': '1.0.0',
    'SCREEN-WIDTH': dimensions.width.toString(),
    'SCREEN-HEIGHT': dimensions.height.toString(),
    'Accept-Language': 'zh'
  }
});
client.interceptors.request.use(config => {
  // let token = TokenManager.get();
  let token = 'MTIyMzM0QDE2My5jb206MTUwNjQzNTE0OTYxODo1NmU4NmY2NzM5NWZmNzdmNDQzNDU5YTNlNjZmMTEwOA';
  if (token) {
    config.headers['TOKEN'] = token
  }
  console.log('[axios] ---Request send---');
  console.log('[axios] method: ' + config.method);
  console.log('[axios] url: ' + config.url);
  console.log('[axios] params: ');
  console.log(config.params);
  console.log('[axios] (end)');
  return config;
});
client.interceptors.response.use(response => {
  console.log('[axios] ---Response received---');
  console.log('[axios] response:');
  console.log(response.data);
  console.log('[axios] (end)');
  return response;
}, error => {
  console.log(`[axios] ---Response error---`);
  console.log('[axios] code: ' + error.response.status);
  console.log('[axios] url: ' + error.response.request._url);
  console.log('[axios] (end)');
  ToastUtil.showShort("服务器连接失败,请稍后再试...");
});
export const apiURL = {
  login: '/user/login/',
  getProjectList: 'project/getProjectList',
  getStudyList: 'study/getStudyList',
  changePassword: 'user/changePassword/',
};
export function login(email: string, pwd: string): Promise<Response> {
  return client.get(apiURL.login + email + "/" + pwd).catch(error => {
  });
}

export function changePassword(newpwd: string): Promise<Response> {
  return client.get(apiURL.changePassword + newpwd).catch(error => {
  });
}

export function projectLists(pn: string, popleGroup: string, sicknessStatus: string, sicknessType: string, searchContent: string) {
  return client.post(apiURL.getProjectList, {
    start: pn,
    key_Words: searchContent,
    people_group: popleGroup,
    sickness_Status: sicknessStatus,
    sickness_type: sicknessType
  }).catch(error => {
  });
}

export function getStudyList(pn: string, searchContent: string, studyType: string) {
  return client.post(apiURL.getStudyList, {
    start: pn,
    key_Words: searchContent,
    study_type: studyType
  }).catch(error => {
  });
}

export function dispatchResponse(response: Response,
                                 dispatch: (action: Object) => void,
                                 sAction: (resp: SimoResponse) => Object,
                                 eAction ?: (resp: SimoResponse) => Object): void {
  if (response) {
    if (response.data && response.data.statusCode === 0) {
      dispatch(sAction(response.data));
      return;
    }

    if (response.data && response.data.statusCode === -1010) {
      // 重新登录
      dispatch({
        type: types.REST_LOGIN
      });
      return;
    }
  }
  // error happens.
  if (eAction) {
    dispatch(eAction(response.data));
  } else {
    let msg: string = response.data.statusMessage;
    if (!msg) {
      msg = "未知错误";
    }
    ToastUtil.showShort(msg);
  }
}