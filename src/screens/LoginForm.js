import React, { Component } from 'react'
import firebase from 'firebase'
import CardSection from '../component/CardSection'
import CardStyle from '../component/CardStyle'
import Input from '../component/Input'
import Spinner from '../component/Spinner'
import ButtonStyle from '../component/ButtonStyle'
import { Text } from 'react-native'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;
     
        this.setState({ error: '', loading: true });
     
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(this.onLoginSuccess.bind(this))
              .catch(this.onLoginFail.bind(this));
          });
      }

      renderButton() {
        if (this.state.loading) {
          return <Spinner size="small" />;
        }
     
        return (
          <ButtonStyle onPress={this.onButtonPress.bind(this)}>
            <Text>Log in</Text>
          </ButtonStyle>
        );
      }
      onLoginFail() {
        this.setState({ error: 'Authentication Failed.', loading: false });
      }
     
      onLoginSuccess() {
        this.setState({
          email: '',
          password: '',
          error: '',
          loading: false
        });
      }

    render() {
        return (
            <CardStyle>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                {this.renderButton()}
                </CardSection>
            </CardStyle>
        );
    }
}

const styles = {
    errorTextStyle: {
      alignSelf: 'center',
      color: 'red'
    }
  };

export default LoginForm;