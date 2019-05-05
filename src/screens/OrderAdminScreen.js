import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import OrderDetailAdmin from '../component/OrderDetailAdmin'
import firebase from 'firebase'
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class OrderAdminScreen extends Component {
    state = { level: '', price: '', data: [], toppings: '', name: '', status: '', username: '',id:''}
    readUserData = () => {
        firebase.database().ref('Orders/').on('value', (snapshot) => {
            var data = Object.keys(snapshot.val()).map(id => ({ ...snapshot.val()[id], id }));
            this.setState({ data })
            console.log('DataOfOrder', data)

        });
    }
    componentWillMount() {
        this.readUserData()
    }
    renderOrder() {
        return this.state.data.map((Order, index) =>
            <OrderDetailAdmin key={index} level={Order.level} toppings={Order.toppings} name={Order.name} price={Order.price} status={Order.status} username={Order.username} id={Order.id}/>
        );
    }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-alarm" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>OrderList</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <ScrollView>
                            {this.renderOrder()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        );
    }
}

export default OrderAdminScreen;