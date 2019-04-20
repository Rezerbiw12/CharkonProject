    
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button } from 'native-base'
import FirebaseLogin from "../FirebaseLogin";
import CardStyle from '../component/CardStyle'
import LoginForm from '../screens/LoginForm'
import firebase from 'firebase'
import config from '../config/config';
import AdminScreen from '../screens/AdminScreen'

class LoginScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="log-in" style={{ fontSize: 24, color: tintColor }} />
    )
  }
  render(props) {
    return (
      <View style={{ flex: 1 }}>
        <FirebaseLogin login={user => console.warn(user)}/>
      </View>
    );
  }
}

const styles = {
  textEmailStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 6,
  }
}
export default LoginScreen;