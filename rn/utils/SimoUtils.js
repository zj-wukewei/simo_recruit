/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

const checkEmail = (email: String) => {
    if(!email || email.length === 0) {
        return false;
    }
    return reg.test(email);
}

export default {
    checkEmail
};
