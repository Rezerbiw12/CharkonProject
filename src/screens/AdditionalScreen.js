import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { Container, Header, Left, Right, Icon, Title } from 'native-base'
import ListmenuScreen from './ListmenuScreen'
import ProfileScreen from './ProfileScreen'
import { 
    createDrawerNavigator, 
    DrawerItems,
    StackNavigator,
    createStackNavigator
} from 'react-navigation'

class AdditionalScreen extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="grid" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>Additional</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View style={{ flex: 1 }}>
                <ListmenuStackNavigator/>
                </View>
            </View>
        );
    }
}

export default AdditionalScreen;

const ListmenuStackNavigator = createStackNavigator({
    ListMenu: ListmenuScreen,
    Profile:ProfileScreen,
    })