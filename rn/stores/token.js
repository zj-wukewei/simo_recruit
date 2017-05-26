/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {AsyncStorage} from "react-native";
const tokenKey = 'user:token';
let token;
const TokenManager = {
    init: async function () {
        if (!token) {
            const value = await AsyncStorage.getItem(tokenKey);
            if (value !== null) {
                token = value;
            }
        }
    },
    get: function (): string {
        if (!token) {
            this.init();
        }
        return token;
    },
    set: function (t: string): void {
        if (t !== token) {
            token = t;
            AsyncStorage.setItem(tokenKey, token);
        }
    }
}
export default TokenManager;