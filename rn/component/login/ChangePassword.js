/**
 * Created by hzwukewei on 2017-5-26.
 * @flow
 */

import React, {Component} from "react";
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from "react-native";
import {Colors, Dimens} from "../../assets/Attrs";
import Button from "../widget/Button";
import ToasUtil from "../../utils/ToasUtil";

const maxWidth = Dimensions.get('window').width;

type Props = {
    changeSuccess: boolean,
    changePasswordCallback: (pwd: string) => void
};

class ChangePassword extends Component {
    static navigationOptions = {
        header: null
    };
    state: {
        password: string
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            password: ""
        };
    }

    _onLoginPress() {
        if (this.state.password.length < 6) {
            ToasUtil.showShort("请输入6~20位数字、字母密码");
            return;
        }
        if (this.state.password === "123456") {
            ToasUtil.showShort("密码不能为123456");
            return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={ require('../../assets/ic_change_password_backgroud.png')}
                    style={{
                        width: maxWidth,
                        height: 250
                    }}>
                    <View style={styles.simoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/ic_simo_small.png')}/>

                        <Text style={styles.text}>重置密码后需要您设置新的密码{"\n"}请勿设置为"123456"</Text>
                    </View>
                </Image>
                <View style={styles.formRoot}>
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

                    <Button
                        disabled={false}
                        onPress={() => this._onLoginPress()}
                        containerStyle={styles.loginBtn}
                        style={styles.loginText}
                        text="登录"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center'
    },
    simoContainer: {
        flexDirection: 'column',
        marginTop: 70,
        flex: 1,
        alignItems: 'center'
    },
    formRoot: {
        flexDirection: 'column',
        marginTop: 70,
        width: Dimens.TouchWidth,
        alignItems: 'stretch',
    },
    logo: {
        width: 75,
        height: 28,
    },
    logoEmail: {
        width: 16,
        height: 17,
    },
    textInputBackgroud: {
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: "#dce1eb",
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
    text: {
        textAlign: 'center',
        marginTop: 20,
        color: Colors.whiteBackgroundColor,
        fontSize: 16,
    },
    loginBtn: {
        marginTop: 75,
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

export default ChangePassword;