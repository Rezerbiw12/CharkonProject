import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Right, Icon, Title } from 'native-base'
import { SocialIcon } from 'react-native-elements'
class LoginScreen extends Component {
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
                <View style={{flex:1,justifyContent: 'center'}}>
                    <SocialIcon
                        title='Sign In With Facebook'
                        button
                        type='facebook'
                    />
                </View>
            </View>
        );
    }
}

export default LoginScreen;
