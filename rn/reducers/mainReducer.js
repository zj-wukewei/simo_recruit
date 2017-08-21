/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */
import {fromJS, Map} from "immutable";
import TokenManager from "../stores/token";
import UserSystem from "../constants/UserSystem";
import * as types from "../constants/ActionTypes";


export const mainReducer = (state: Object = Map(), action: Object) => {
  switch (action.type) {
    case types.REST_LOGIN:
      console.log("rest_login");
      return state;
    default:
      return state;
  }
};

type State = {
  token: string,
  userId: string,
  groupId: string,
  loginSuccess: boolean,
  changePwdSuccess: boolean,
}

const initialState = {
  token: "",
  userId: "",
  groupId: "",
  loginSuccess: false,
  changePwdSuccess: false
};

export const loginReducer = (state: Object = fromJS(initialState), action: Object): State => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      console.log("Login success! Set token: " + action.token);
      state = state.set("loginSuccess", action.loginSuccess);
      UserSystem.setUid(action.userId.toString());
      UserSystem.setGroupid(action.groupId.toString());
      TokenManager.set(action.token);
      return state;
    case types.LOGIN_FAIL:
      console.log("Login fail!");
      return state;
    case types.CHANGE_PASSWORD_SUCCESS:
      console.log("changepassword success! Set token: " + action.token);
      state = state.set("changePwdSuccess", action.changePwdSuccess);
      UserSystem.setIslogin('true');
      UserSystem.setEmail(action.email);
      UserSystem.setUid(action.userId);
      UserSystem.setGroupid(action.groupId);
      TokenManager.set(action.token);
      return state;
    default:
      return state;
  }
};