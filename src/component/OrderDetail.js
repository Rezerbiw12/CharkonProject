import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import CardStyle from './CardStyle'
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'
import Modal from 'react-native-modalbox'
import RadioGroup from 'react-native-radio-buttons-group'
import CheckBox from 'react-native-checkbox'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        console.log('----', this.props);
        return (
            <CardStyle>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.data2}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text style={styles.headerTextStyle}>
                            {this.props.topping}
                        </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                    </View>
                </CardSection>
            </CardStyle>
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
        fontWeight: 'bold'
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
})

export default OrderDetail;
