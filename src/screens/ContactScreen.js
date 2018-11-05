import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button as NewButton, Badge, Text as NewText } from 'native-base'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'
import CardStyle from '../component/CardSection'
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from 'react-native-checkbox';
import CardSection from '../component/CardSection'

class ContactScreen extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    label: 'หวานน้อย',
                    value: "หวานน้อย",
                },
                {
                    label: 'หวานปกติ',
                    value: "หวานปกติ",
                },
                {
                    label: 'หวานมาก',
                    value: "หวานมาก",
                },
            ],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
        };
    }
    onPress = data => this.setState({ data });
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="mail" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>Contact</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <Button onPress={() => this.refs.modal3.open()} style={styles.btn}>But Now!!</Button>
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
                    <View style={styles.containerMain}>
                        <CardStyle>
                            <Text style={styles.text}> รายละเอียดสินค้า</Text>
                        </CardStyle>

                        <CardStyle>
                            <View style={styles.container}>
                                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                                <Text style={styles.valueText}>
                                    ความหวาน = {selectedButton}
                                </Text>
                            </View>
                        </CardStyle>
                        <CardStyle>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <CheckBox
                                    label='ไซรัป 5 บาท'
                                    onChange={(checked) => console.log('I am ไซรัป', checked)}
                                />
                                <CheckBox
                                    label='วิปปิ้งครีม 10 บาท'
                                    onChange={(checked) => console.log('I am วิปปิ้งครีม', checked)}
                                />
                                <CheckBox
                                    label='ไข่มุก 5 บาท'
                                    onChange={(checked) => console.log('I am ไข่มุก', checked)}
                                />
                                <CheckBox
                                    label='เยลลี่ 5 บาท'
                                    onChange={(checked) => console.log('I am เยลลี่', checked)}
                                />
                            </View>
                        </CardStyle>
                        <CardStyle>
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', padding: 10 }}>
                                <ElementButton onPress={() => this.refs.modal3.close()}
                                    large
                                    icon={{ name: 'envira', type: 'font-awesome' }}
                                    title='ยืนยัน' />
                            </View>
                        </CardStyle>
                    </View>
                </Modal>
                <Button onPress={() => this.refs.modal6.open()} style={styles.btn}>ติดต่อเรา</Button>
                <Modal style={[styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
                    <Container>
                        <Header>
                            <Right>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Title>ติดต่อเรา</Title>
                                </View>
                            </Right>
                        </Header>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ElementIcon
                                    reverse
                                    name='ios-mail'
                                    type='ionicon'
                                    color='#517fa4'
                                />
                                <Text>
                                    Email
                                        </Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <ElementIcon
                                    reverse
                                    name='ios-chatbubbles'
                                    type='ionicon'
                                    color='#517fa4'
                                />
                                <Text>
                                    Chat
                                    </Text>
                            </View>
                        </View>
                    </Container>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({

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
        height: 500,
        width: 400
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
        marginBottom: 50,
    },

});
export default ContactScreen;
