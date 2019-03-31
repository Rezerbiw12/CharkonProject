import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button as NewButton, Badge, Text as NewText } from 'native-base';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class AdminScreen extends Component {
  constructor() {
    super();
    this.state = {
      dialogVisible: false
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Right>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Title>AdminScreen</Title>
            </View>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Right>
        </Header>
        <Content style={{ padding: 20 }}>
          <View>
            <View style={{ padding: 20 }}>
            </View>
            <View style={{ padding: 20 }}>
              <NewButton block success onPress={() => this.setState({ dialogVisible: true })}>
                <NewText style={{ fontSize: 20 }}>แจ้งสถานะ เปิด/ปิด ของร้าน</NewText>
              </NewButton>
            </View>
            <ConfirmDialog
              title="Confirm Dialog"
              message="คุณต้องการที่จะเปิดร้านหรือปิดร้าน"
              visible={this.state.dialogVisible}
              onTouchOutside={() => this.setState({ dialogVisible: false })}
              positiveButton={{
                title: "เปิดร้าน",
                onPress: () => alert("คุณได้ทำการเปิดร้านเรียบร้อยแล้ว")
              }}
              negativeButton={{
                title: "ปิดร้าน",
                onPress: () => alert("คุณได้ทำการปิดร้านเรียบร้อยแล้ว")
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default AdminScreen;

