/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {StackNavigator} from "react-navigation";
import Splash from "./component/Splash";
import LoginContainer from "./containers/LoginContainer";
import ChangePasswordContainer from "./containers/ChangePasswordContainer";

const SimoRouter = StackNavigator(
    {
        Splash: {screen: Splash},
        Login: {screen: LoginContainer},
        ChangePassword: {screen: ChangePasswordContainer}
    }
);

export default SimoRouter;