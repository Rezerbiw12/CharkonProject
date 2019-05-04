import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems,StackNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'
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

export default class App extends Component {
  state = {
    user: null,
    isLoading: true
  }

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user,
        isLoading: false
      })
    })
  }
  render() {
    const { user, isLoading } = this.state;
    if (isLoading) {
      return <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}><NineCubesLoader /></View>
    }
      if (user) {
        return <AppDrawerNavigator/>
      } else {
        return <AppDrawerNavigator2/>
      }
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./image/icon-men.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
      <Text>{firebase.auth().currentUser.displayName}</Text>
    </View>
    <ScrollView>
      <DrawerItems{...props} />
    </ScrollView>
    <View style={{ flex: 1 }}>
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

const AppDrawerNavigator = createDrawerNavigator({
  Homes: HomeScreen,
  Settings: SettingsScreen,
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