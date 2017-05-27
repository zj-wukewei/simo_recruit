/**
 * Created by hzwukewei on 2017-5-25.
 * @flow
 */

import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, TextInput, View} from "react-native";
import {Colors, Dimens} from "../../assets/Attrs";
import Button from "../widget/Button";
import ToastUtil from "../../utils/ToastUtil";
import SimoUtils from "../../utils/SimoUtils";
import UserSystem from "../../constants/UserSystem";
import NavigationUtil from '../../utils/NavigationUtil';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

type Props = {
    loginSuccess: boolean,
    loginCallback: (name: string, pwd: string) => void
};


class Login extends Component {

    static navigationOptions = {
        header: null
    };
    state: {
        email: string,
        password: string
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    _onLoginPress() {
        NavigationUtil.reset(this.props.navigation, 'Home')
        return;
        if (!SimoUtils.checkEmail(this.state.email)) {
            ToastUtil.showShort("请输入正确的邮箱格式");
            return;
        }
        if (this.state.password.length < 6) {
            ToastUtil.showShort("请输入6~20位数字、字母密码");
            return;
        }
        this.props.loginCallback(this.state.email, this.state.password);
    }

    componentDidMount() {
        const isLogin = UserSystem.getIslogin();
        if (isLogin) {
            NavigationUtil.reset(this.props.navigation, 'Home')
            return;
        }
    }

    componentWillReceiveProps(nextProps) {
        const loginSuccess = nextProps.loginSuccess;
        const {navigate} = this.props.navigation;
        console.log("Login componentWillReceiveProps");
        if (loginSuccess) {
            if (this.state.password === '123456') {
                navigate('ChangePassword');
            } else {
                UserSystem.setIslogin('true');
                NavigationUtil.reset(navigate, 'Home')
            }
        }
    }

    render() {
        return (
            <Image
                source={ require('../../assets/ic_login.png')}
                style={{
                    width: maxWidth,
                    height: maxHeight
                }}>
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/ic_simo_small.png')}/>

                    <View style={styles.formRoot}>
                        <View style={styles.formBackgroud}>

                            <View style={styles.textInputBackgroud}>

                                <Image
                                    style={styles.logoEmail}
                                    source={require('../../assets/ic_login_email.png')}/>
                                <TextInput
                                    onChangeText={(text) => this.setState({email: text})}
                                    style={styles.form}
                                    placeholder="输入账号"
                                    placeholderTextColor="#616161"
                                    underlineColorAndroid="transparent"/>
                            </View>
                            <View style={{
                                height: 1,
                                opacity: 0.8,
                                backgroundColor: "#dce1eb"
                            }}/>

                            <View style={styles.textInputBackgroud}>

                                <Image
                                    style={styles.logoEmail}
                                    source={require('../../assets/ic_login_password.png')}/>
                                <TextInput
                                    onChangeText={(text) => this.setState({password: text})}
                                    style={styles.form}
                                    maxLength={20}
                                    secureTextEntry={true}
                                    placeholder="输入密码"
                                    placeholderTextColor="#616161"
                                    underlineColorAndroid="transparent"/>
                            </View>
                        </View>

                        <Button
                            disabled={false}
                            onPress={() => this._onLoginPress()}
                            containerStyle={styles.loginBtn}
                            style={styles.loginText}
                            text="登录"/>
                    </View>

                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 75,
        height: 28,
        marginTop: 83,
    },
    logoEmail: {
        width: 16,
        height: 17,
    },
    textInputBackgroud: {
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    formBackgroud: {
        marginTop: 32,
        backgroundColor: "#ffffff",
        opacity: 0.8,
        borderRadius: 4
    },
    form: {
        flex: 1,
        marginLeft: 4,
        marginRight: 20,
        textAlign: 'center',
        fontSize: 14,
        height: 45,
        paddingLeft: 0,
        color: "#000000",
    },
    formRoot: {
        flexDirection: 'column',
        marginTop: 170,
        width: Dimens.TouchWidth,
        alignItems: 'stretch',
    },
    loginBtn: {
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimens.TouchWidth,
        backgroundColor: Colors.colorAccent,
        height: Dimens.TouchHeight,
        borderRadius: 50
    },
    loginText: {
        color: Colors.whiteBackgroundColor,
        fontSize: 13,
    },
});

export default Login;