/**
 * Created by hzwukewei on 2017-5-25.
 */

import React from "react";
import SimoRouter from "./SimoRouter"
import {Provider} from "react-redux";
import configureStore from "./stores/configure-store";

const store = configureStore();

const SimoApp = () => (
  <Provider store={store}>
    <SimoRouter />
  </Provider>
);

export default SimoApp;