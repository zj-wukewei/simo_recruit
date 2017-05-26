/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import axios from "axios";
import {Dimensions, Platform} from "react-native";
import TokenManager from "../stores/token";
import type {Response, SimoResponse} from "../flowtype";
import ToasUtil from "../utils/ToasUtil";

const dimen = Dimensions.get('window');
const client = axios.create({
    baseURL: 'http://192.168.3.19:8086/simo/',
    timeout: 20000,
    headers: {
        'APP-ID': Platform.OS === 'android' ? '2' : '1',
        'APP-MODEL': Platform.OS === 'android' ? 'android' : 'ios',
        'APP-VERSION': '1.0.0',
        'SCREEN-WIDTH': dimen.width.toString(),
        'SCREEN-HEIGHT': dimen.height.toString(),
        'Accept-Language': 'zh'
    }
});
client.interceptors.request.use(config => {
    let token = TokenManager.get();
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
    console.log('[axios] response:')
    console.log(response.data);
    console.log('[axios] (end)');
    return response;
}, error => {
    console.log(`[axios] ---Response error---`);
    console.log('[axios] code: ' + error.response.status);
    console.log('[axios] url: ' + error.response.request._url);
    console.log('[axios] (end)');
    ToasUtil.showShort("服务器连接失败,请稍后再试...");
});
export const apiURL = {
    login: '/user/login/',
    changePassword: 'user/changePassword/',
};
export function login(email: string, pwd: string): Promise<Response> {
    return client.get(apiURL.login + email + "/" + pwd).catch(error => {
    });
};

export function changePassword(newpwd: string): Promise<Response> {
    return client.get(apiURL.changePassword + newpwd).catch(error => {
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
    }
    // error happens.
    if (eAction) {
        dispatch(eAction(response));
    } else {
        let msg = response.data.statusMessage;
        if (!msg) {
            msg = "未知错误";
        }
        ToasUtil.showShort(msg);
    }
}