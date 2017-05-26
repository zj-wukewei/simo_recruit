/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {dispatchResponse, login, changePassword} from "./api";
import md5 from "md5";
import * as types from "../constants/ActionTypes";

export const thunkLogin = (name: string, pwd: string) => {
    pwd = md5(pwd).toUpperCase();
    return (dispatch: (action: Object) => void) => {
        return login(name, pwd)
            .then(response =>
                dispatchResponse(response, dispatch, loginResponse)
        )
        ;
    }
}

const loginResponse = (longinResponse: SimoResponse) => {
    return {
        type: types.LOGIN_SUCCESS,
        token: longinResponse.data.token,
        userId: longinResponse.data.userId,
        groupId: longinResponse.data.groupId,
        loginSuccess: true
    }
};

const loginFail = (error: SimoResponse) => {
    return {
        type: types.LOGIN_FAIL,
        error: error.statusMessage
    }
};



export const thunkChangePassword = (pwd: string) => {
    pwd = md5(pwd).toUpperCase();
    return (dispatch: (action: Object) => void) => {
        return changePassword(pwd)
            .then(response =>
                dispatchResponse(response, dispatch, changePasswordResponse)
            );
    }
}

const changePasswordResponse = (changeResponse: SimoResponse) => {
    return {
        type: types.CHANGE_PASSWORD_SUCCESS,
        token: changeResponse.data.token,
        userId: changeResponse.data.userId,
        groupId: changeResponse.data.groupId,
        loginSuccess: true
    }
};