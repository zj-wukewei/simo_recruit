/**
 * Created by hzwukewei on 2017-5-27.
 * @flow
 */

import { NavigationActions } from 'react-navigation';

const reset = (navigation: Object, routeName: string) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName})
        ]
    });
    navigation.dispatch(resetAction);
}

export default {
    reset
};
