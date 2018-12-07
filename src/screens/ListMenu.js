import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListMenu extends Component {
  static navigationOptions = {
    title : 'ListMenu'
};
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default ListMenu;
