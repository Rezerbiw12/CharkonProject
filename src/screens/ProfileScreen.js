import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Button } from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  submitAndClear = () => {}
  render() {
    return (
      <View>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        clearButtonMode='always'
      />
      <Button
        onPress={this.submitAndClear}
        title='Submit'
        color='#841584'
        accessibilityLabel='Learn more about this purple button'      
        placeholder='Enter text...'
        />
    </View>
    );
  }
}

export default Profile;
