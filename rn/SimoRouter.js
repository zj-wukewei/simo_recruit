/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {StackNavigator, TabNavigator} from "react-navigation";
import Splash from "./component/Splash";
import LoginContainer from "./containers/LoginContainer";
import ChangePasswordContainer from "./containers/ChangePasswordContainer";
import ProjectContainer from "./containers/ProjectContainers";
import Study from "./component/study/Study";
import User from "./component/user/User";
import Question from "./component/question/Question";
import Experience from "./component/experience/Experience";
import React from "react";
import {Colors} from "./assets/Attrs";

const Tab = TabNavigator(
  {
    Project: {
      screen: ProjectContainer,
    },

    Study: {
      screen: Study,
    },

    Question: {
      screen: Question,
    },

    Experience: {
      screen: Experience,
    },
    User: {
      screen: User,
    }
  },
  {
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#2196f3',
      inactiveTintColor: '#d5d5d5',
      style: {backgroundColor: '#ffffff',},
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);

const SimoRouter = StackNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: LoginContainer},
    ChangePassword: {screen: ChangePasswordContainer},
    Home: {
      screen: Tab,
      navigationOptions: {
        headerLeft: null
      }
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.colorPrimary
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }

  }
);

export default SimoRouter;