import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button as NewButton, Badge, Text as NewText } from 'native-base'
import { Icon as ElementIcon } from 'react-native-elements'
var screen = Dimensions.get('window');

class ModalCenter extends Component {
    constructor() {
        super();
        this.state = {
          isOpen: false,
          isDisabled: false,
          swipeToClose: true,
          sliderValue: 0.3
        };
      }
    render() {
        return (
            <View>
     
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
        height: 300,
        width: 300
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
        fontSize: 22
    }

});
export default ModalCenter;
