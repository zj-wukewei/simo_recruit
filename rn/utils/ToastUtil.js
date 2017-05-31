/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import { Alert, ToastAndroid, Platform } from 'react-native';

const showShort = (content: string, isAlert: boolean) => {
    if (!content) {
        return;
    }
    if (isAlert || Platform.OS === 'ios') {
        Alert.alert('提示', content.toString());
    } else {
        ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
    }
};

const showLong = (content: string, isAlert: boolean) => {
    if (isAlert || Platform.OS === 'ios') {
        Alert.alert('提示', content.toString());
    } else {
        ToastAndroid.show(content.toString(), ToastAndroid.LONG);
    }
};

export default {
    showShort,
    showLong
};