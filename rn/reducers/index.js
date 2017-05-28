/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {combineReducers} from "redux-immutable";
import {mainReducer, loginReducer} from "./mainReducer";
import {projectListReducer} from "./homeReducer";

const rootReducer = combineReducers({
    mainReducer,
    loginReducer,
    projectListReducer
});

export default rootReducer ;