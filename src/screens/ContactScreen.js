import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button as NewButton, Badge, Text as NewText } from 'native-base'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'
import CardSection from '../component/CardSection'
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from 'react-native-checkbox';
//import CardSection from '../component/CardSection'

class ContactScreen extends Component { 
    onPress = data => this.setState({ data });
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="mail" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        
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
        marginBottom: 20,
    },

});
export default ContactScreen;
