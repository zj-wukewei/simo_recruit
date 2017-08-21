/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState: Object) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}