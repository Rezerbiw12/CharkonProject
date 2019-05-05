import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import Modal from 'react-native-modalbox'
import ButtonStyle from '../component/ButtonStyle'
import CardStyle from '../component/CardStyle'
import CardSection from '../component/CardSection'
import RadioGroup from 'react-native-radio-buttons-group'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'
import { Content, Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button as NewButton, Badge, Text as NewText } from 'native-base';
import firebase from 'firebase'
class AdminScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          color: 'blue',
          label: 'เปิดร้าน',
          value: "เปิดร้าน",
          selected: true
        },
        {
          color: 'red',
          label: 'ปิดร้าน',
          value: "ปิดร้าน",

        },
      ],
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  }
  onSubmit = () => {
    const { data } = this.state
    firebase.database().ref(`Status/`).update({
      status: data.filter(data => data.selected === true).pop().label,
    })
    this.refs.modal3.close()

  }
  onPress = data => {
    console.log(data)
    this.setState({ data });
  }
  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    return (
      <Container>
        <Header>
          <Right>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Title>จัดการเกี่ยวกับร้าน</Title>
            </View>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Right>
        </Header>
        <CardStyle>
          <Button title=" อัพเดทสถานะทางร้าน" onPress={() => this.refs.modal3.open()} style={styles.btn}>
          </Button>
          </CardStyle>
          <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
            <View style={styles.containerMain}>
              <CardSection>
                <View style={styles.container}>
                  <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                </View>
              </CardSection>
              <CardSection>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <ElementButton onPress={() => this.onSubmit()}
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title={`ยืนยัน`}
                  />
                </View>
              </CardSection>
            </View>
          </Modal>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'

  },
  thumbnailStyle: {
    height: 300,
    width: 300,
    margin: 20
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    flex: 1
  },

  modal4: {
    height: 215
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 22
  },
  containerMain: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  textForm: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold'
  },
  textInputEmail: {
    padding: 4,
    fontSize: 18,
    height: 30,
    width: 100,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    flex: 2,
  },
  textInputPassword: {
    padding: 4,
    fontSize: 18,
    height: 30,
    width: 100,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    flex: 2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  valueText: {
    fontSize: 18,
    marginBottom: 20,
  },
})
export default AdminScreen;

