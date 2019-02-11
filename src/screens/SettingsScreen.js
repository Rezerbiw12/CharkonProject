import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import { SearchBar } from 'react-native-elements'
import OrderDetail from '../component/OrderDetail'
import firebase from 'firebase'
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class SettingsScreen extends Component {
    state = {Order:'', Price:'',data: [], Addon:'',Name:'',Topping:''}
    readUserData = () =>  {
         firebase.database().ref('Orders/Users').on('value', (snapshot) => {
            var data =[]
            snapshot.forEach((child) => {
                data.push({
                  Order:child.val(),
                  Addon:child.val().Item
                });

             })
             console.log('DataOfOrder',data)
            this.setState({data})
      
        });
    }
    componentWillMount() {
        this.readUserData() 
      }
      renderOrder() {
        return this.state.data.map((Order,index)=> 
            <OrderDetail key={index} data2={Order.Addon.Item1.Name} topping={Order.Addon.Item1.Addon}/>
        );
      }
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
                <View style={{ flex:1}}>
                <ScrollView>  
                    {this.renderOrder()}
                </ScrollView>
                </View>
                </View>
            </View>
        );
    }
}

export default SettingsScreen;
