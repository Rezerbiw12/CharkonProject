import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Left, Right, Icon, Title,Button } from 'native-base'
import CardStyle from '../screens/CardStyle'
import firebase from 'firebase'
class LoginScreen extends Component {
    state = { email: 'biwzaza141@hotmail.com', password: 'biwzaza141' };
    onLoginButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { alert("Successful , " + email + " " + password); })
            .catch((msgError) => { alert(msgError.message); });
    }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="log-in" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>Login</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
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
                            <Button full success onPress={this.onLoginButtonPress.bind(this)} style={Style.buttonLogin}><Text> Login </Text></Button>
                        </View>
                    </CardStyle>
                </View>
            </View>
        );
    }
}
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

export default LoginScreen;
