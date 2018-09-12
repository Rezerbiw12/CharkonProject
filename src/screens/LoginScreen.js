import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Button } from 'native-base'
import CardStyle from '../component/CardStyle'
import LoginForm from '../screens/LoginForm'
import firebase from 'firebase'

class LoginScreen extends Component {
  state = { loggedIn: null };
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="grid" style={{ fontSize: 24, color: tintColor }} />
    )
  }
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
          <CardStyle>
            <Text style={styles.textEmailStyle}>{firebase.auth().currentUser.email}</Text>
            <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
          </CardStyle>
        </View>);
    } else {
      return (
        <View>
          <LoginForm />
        </View>);
    }
  }

  render(props) {
    return (
      <View>
        <Header>
          <Right>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Title>Additional</Title>
            </View>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Right>
        </Header>
        <View>
          {this.renderFormLogin()}
        </View>
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

