import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Right, Icon, Title } from 'native-base'

class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="settings" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>Setting</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text> SettingsScreen </Text>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;
