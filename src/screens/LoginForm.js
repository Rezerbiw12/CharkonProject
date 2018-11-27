import React, { Component } from 'react';
import { View, Text, TextInput, ActivityIndicator,navigator} from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button } from 'native-base'
import CardStyle from '../component/CardStyle'
import firebase from 'firebase'
import AdminScreen from './AdminScreen';
class LoginForm extends Component {
    state = {
        email: 'biwkabpom141@hotmail.com',
        password: 'biwzaza141',
        error: '',
        loading: false
    };
    onLoginButtonPress = () => {
        const { email, password } = this.state;
        this.setState({ loading: true });
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({ loading: false });
                alert("ยินดีต้อนรับ  " + email + " เข้าสูู่ชาคอนอนไลน์ ");
            })
            .catch((msgError) => {
                this.setState({ loading: false });
                alert(msgError.message);
            });
    }
    renderButton(){
        if(this.state.loading){
            return(<ActivityIndicator size='small'/>);
        }else{
            return(<Button full success onPress={this.onLoginButtonPress.bind(this)} style={Style.buttonLogin}><Text> Login </Text></Button>);
        }
    }

    render() {
        return (
            <View>
                <CardStyle>
                    <View style={Style.containerMain}>

                        <View style={Style.containerInput}>
                            <Text style={Style.textForm}>Email</Text>
                            <TextInput style={Style.textInputEmail}
                                autoCorrect={false}
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText={str => this.setState({ email: str })}></TextInput>

                        </View>
                        <View style={Style.containerInput}>
                            <Text style={Style.textForm}>Password</Text>
                            <TextInput style={Style.textInputPassword}
                                autoCorrect={false}
                                placeholder='Password'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={str => this.setState({ password: str })}></TextInput>

                        </View>
                        {this.renderButton()}
                    </View>
                </CardStyle>
            </View>
        );
    }
}

export default LoginForm;
const Style = {
    containerMain: {
        flexDirection: 'column'
    },
    containerInput: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    textForm: {
        fontSize: 18,
        flex: 1,
    },
    textInputEmail: {
        padding: 4,
        fontSize: 18,
        height: 30,
        width: 100,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        flex: 2,
    },
    textInputPassword: {
        padding: 4,
        fontSize: 18,
        height: 30,
        width: 100,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        flex: 2
    },
};
