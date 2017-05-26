/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {StackNavigator} from "react-navigation";
import Splash from "./component/Splash";
import LoginContainer from "./containers/LoginContainer";
import ChangePasswod from "./component/login/ChangePassword";

const SimoRouter = StackNavigator(
    {
        Splash: {screen: Splash},
        Login: {screen: LoginContainer},
        ChangePassword: {screen: ChangePasswod}
    }
);

export default SimoRouter;