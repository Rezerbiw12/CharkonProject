import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';

class ListmenuScreen extends Component {
  render() {
    return (
      <View>
        <Button title="Go Profile" onPress={()=>this.props.navigation.navigate('Profile')}/>
      </View>
    );
  }
}

export default ListmenuScreen;
