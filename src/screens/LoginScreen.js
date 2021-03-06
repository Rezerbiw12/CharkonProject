import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button } from 'native-base'
import CardStyle from '../component/CardStyle'
import LoginForm from '../screens/LoginForm'
import firebase from 'firebase'

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
  renderFormLogin() {
    if (this.state.loggedIn == true) {
      return (
        <View>
          <Header>
            <Right>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Wellcome</Title>
              </View>
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Right>
          </Header>
          <CardStyle>
            <Text style={styles.textEmailStyle}>{firebase.auth().currentUser.email}</Text>
            <Button onPress={() => firebase.auth().signOut()}><Text>Logout</Text></Button>
          </CardStyle>
        </View>);
    } else {
      return (
        <View>
          <Header>
            <Right>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Title>Wellcome</Title>
              </View>
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Right>
          </Header>
          <LoginForm />
        </View>);
    }
  }

  render(props) {
    return (
      <View>
        {this.renderFormLogin()}
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

