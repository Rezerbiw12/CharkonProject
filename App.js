import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems,StackNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ContactScreen from './src/screens/ContactScreen'
import AdditionalScreen from './src/screens/AdditionalScreen'
import LoginScreen from './src/screens/LoginScreen'
import ListMenu from './src/screens/ListMenu'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import AdminScreen from './src/screens/AdminScreen';
export default class App extends Component {
  render() {
    return (
      <AppDrawerNavigator/>
    );
  }
}
const navigation = createStackNavigator({
  ListMenu:{
    screen:ListMenu,
  }
})
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./image/icon-men.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
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
  CreateAndLogin:LoginScreen,
  Admin:AdminScreen,
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'orange'
    }
  })