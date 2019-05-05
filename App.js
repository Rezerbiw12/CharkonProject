import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems,StackNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import QueueOrderScreen from './src/screens/QueueOrderScreen'
import ContactScreen from './src/screens/ContactScreen'
import AdditionalScreen from './src/screens/AdditionalScreen'
import LoginScreen from './src/screens/LoginScreen'
import AdminScreen from './src/screens/AdminScreen'
import {NineCubesLoader,TextLoader} from 'react-native-indicator'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image, Button
} from 'react-native';
import firebase from 'firebase';
import OrderAdminScreen from './src/screens/OrderAdminScreen';

export default class App extends Component {
  state = {
    user: null,
    isLoading: true
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        this.setState({
          user,
          isLoading: false
        })
      }, 1000)
    })
  }
  render() {
    const { user, isLoading } = this.state;
    if (isLoading) {
      return <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}><NineCubesLoader /></View>
    }
      if (user) {
        if (user.email == 'admin@hotmail.com') {
          return <AppDrawerNavigator3/>
        } else {

          return <AppDrawerNavigator/>
        }
      } else {
        return <AppDrawerNavigator2/>
      }
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('./image/icon-men.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
      <Text style={{ fontWeight: 'bold'}}>Username: {firebase.auth().currentUser.displayName}</Text>
    </View>
    <ScrollView>
      <DrawerItems{...props} />
    </ScrollView>
    <View style={{ flex: 1 ,flexDirection:'column',justifyContent:'flex-end'}}>
      <Button title="Log Out" onPress={() => firebase.auth().signOut()} />
    </View>
  </SafeAreaView>
)



const CustomDrawerComponent2 = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems{...props} />
    </ScrollView>
  </SafeAreaView>
)

const CustomDrawerComponent3 = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems{...props} />
    </ScrollView>
    <View style={{ flex: 1 ,flexDirection:'column',justifyContent:'flex-end'}}>
      <Button title="Log Out" onPress={() => firebase.auth().signOut()} />
    </View>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Homes: HomeScreen,
  QueueOrder: QueueOrderScreen,
  Contact: ContactScreen,
  Additional: AdditionalScreen,
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'orange'
    }
  })

  
const AppDrawerNavigator2 = createDrawerNavigator({
  Homes: HomeScreen,
  Contact: ContactScreen,
  Login:LoginScreen,
}, {
    contentComponent: CustomDrawerComponent2,
    contentOptions: {
      activeTintColor: 'orange'
    }
  })

  const AppDrawerNavigator3 = createDrawerNavigator({
    Listmenu:OrderAdminScreen,
    Status:AdminScreen,
    Contact: ContactScreen,
  }, {
      contentComponent: CustomDrawerComponent3,
      contentOptions: {
        activeTintColor: 'orange'
      }
    })