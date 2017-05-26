/**
 * Created by hzwukewei on 2017-5-26.
 * @flow
 */

import {AsyncStorage} from "react-native";
const uidKey = 'user:uid';
const emailKey = 'user:email';
const groupidKey = 'user:groupid';
const isloginKey = 'user:islogin';

let uid;
let email;
let groupid;
let islogin;

const UserSystem = {

    initUid: async function () {
        if (!uid) {
            const value = await AsyncStorage.getItem(uidKey);
            if (value !== null) {
                uid = value;
            }
        }
    },
    getUid: function (): string {
        if (!uid) {
            this.initUid();
        }
        return uid;
    },
    setUid: function (u: string): void {
        if (u !== uid) {
            uid = u;
            AsyncStorage.setItem(uidKey, uid);
        }
    },

    initEmail: async function () {
        if (!email) {
            const value = await AsyncStorage.getItem(emailKey);
            if (value !== null) {
                email = value;
            }
        }
    },
    getEmail: function (): string {
        if (!email) {
            this.initEmail();
        }
        return email;
    },
    setEmail: function (e: string): void {
        if (e !== email) {
            email = e;
            AsyncStorage.setItem(emailKey, email);
        }
    },
    initGroupid: async function () {
        if (!groupid) {
            const value = await AsyncStorage.getItem(groupidKey);
            if (value !== null) {
                groupid = value;
            }
        }
    },
    getGroupid: function (): string {
        if (!groupid) {
            this.initGroupid();
        }
        return groupid;
    },
    setGroupid: function (g: string): void {
        if (e !== groupid) {
            groupid = g;
            AsyncStorage.setItem(groupidKey, groupid);
        }
    },
    initIslogin: async function () {
        if (!islogin) {
            const value = await AsyncStorage.getItem(isloginKey);
            if (value !== null) {
                islogin = value;
            }
        }
    },
    getIslogin: function (): string {
        if (!islogin) {
            this.initIslogin();
        }
        return islogin;
    },
    setIslogin: function (login: string): void {
        if (login !== islogin) {
            islogin = login;
            AsyncStorage.setItem(isloginKey, islogin);
        }
    }
};

export default UserSystem;