/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import {connect} from 'react-redux';
import Login from '../component/login/Login';
import {
  thunkLogin
} from '../actions/login';

const mapStateToProps = (state) => {
  return {
    loginSuccess: state.get('loginReducer').get('loginSuccess')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginCallback: (name: string, pwd: string) => {
      dispatch(thunkLogin(name, pwd));
    }
  }
};
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;