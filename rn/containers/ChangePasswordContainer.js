/**
 * Created by wukewei on 17/5/26.
 * @flow
 */

import {connect} from 'react-redux';
import ChangePassword from '../component/login/ChangePassword';
import {
  thunkChangePassword
} from '../actions/login';

const mapStateToProps = (state) => {
  return {
    changePwdSuccess: state.get('loginReducer').get('changePwdSuccess')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePasswordCallback: (pwd: string) => {
      dispatch(thunkChangePassword(pwd));
    }
  }
};

const changePasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);

export default changePasswordContainer;
