import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button } from 'native-base'
import CardSection from '../component/CardSection'
import ButtonStyle from '../component/ButtonStyle'
import LoginForm from '../screens/LoginForm'
import firebase from 'firebase'
import Spinner from '../component/Spinner'

class LoginScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="log-in" style={{ fontSize: 24, color: tintColor }} />
    )
  }
  state = { loggedIn: null };
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBETr7uRGiSSN9iJfo6bNphceEzcbYEoPg",
      authDomain: "charkononline.firebaseapp.com",
      databaseURL: "https://charkononline.firebaseio.com",
      projectId: "charkononline",
      storageBucket: "charkononline.appspot.com",
      messagingSenderId: "973690432366"
    };
    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <ButtonStyle onPress={() => firebase.auth().signOut()}>
              <Text>Log Out</Text>
            </ButtonStyle>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
       {this.renderContent()}
      </View>
    );
  }
}

export default LoginScreen;

