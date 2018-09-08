import React, { Component } from 'react';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ContactScreen from './src/screens/ContactScreen'
import AdditionalScreen from './src/screens/AdditionalScreen'
import LoginScreen from './src/screens/LoginScreen'
import firebase from 'firebase'
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
export default class App extends Component {
  componentDidMount(){
  const config = {
    apiKey: "AIzaSyBETr7uRGiSSN9iJfo6bNphceEzcbYEoPg",
    authDomain: "charkononline.firebaseapp.com",
    databaseURL: "https://charkononline.firebaseio.com",
    projectId: "charkononline",
    storageBucket: "charkononline.appspot.com",
    messagingSenderId: "973690432366"
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}
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
  Home: HomeScreen,
  Settings: SettingsScreen,
  Contact: ContactScreen,
  Additional: AdditionalScreen,
  CreateAndLogin:LoginScreen
}, {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'orange'
    }
  })