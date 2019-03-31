import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import CardStyle from './CardStyle'
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'
import Modal from 'react-native-modalbox'
import RadioGroup from 'react-native-radio-buttons-group'
import CheckBox from 'react-native-checkbox'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'

import firebase from 'firebase'

class MenuDetail extends Component {
    constructor() {
        super();
        this.state = {
            name: 'ชานม',
            username: 'biwkabpom141',
            basePrice: 20,
            data: [
                {
                    label: 'หวานน้อย',
                    value: "หวานน้อย",
                },
                {
                    label: 'หวานปกติ',
                    value: "หวานปกติ",
                    selected: true
                },
                {
                    label: 'หวานมาก',
                    value: "หวานมาก",
                },
            ],
            toppings: [
                {
                    name: 'ไซรัป',
                    price: 5,
                    selected: false,
                },
                {
                    name: 'วิปปิ้งครีม',
                    price: 10,
                    selected: false,
                },
                {
                    name: 'ไข่มุก',
                    price: 5,
                    selected: false,
                },
                {
                    name: 'เยลลี่',
                    price: 5,
                    selected: false,
                },
            ],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
        };
    }

    onSubmit = () => {
        const { name, username, basePrice, data, toppings } = this.state
        firebase.database().ref('Orders/').push({
            name,
            username,
            level: data.filter(data => data.selected === true).pop().label,
            status: 'ยังไม่ส่ง',
            price: this.sumPrice(),
            toppings: toppings.filter(topping => topping.selected === true).map(topping => topping.name)
        })
        this.refs.modal3.close()
    }

    onPress = data => {
        console.log(data)
        this.setState({ data });
    }
    

    onToppingChange = (index, checked) => {
        let { toppings } = this.state
        toppings[index].selected = checked
        this.setState({
            toppings
        })
        console.log(this.state.toppings)
    }

    sumPrice = () => {
        const { basePrice, toppings } = this.state
        return basePrice + toppings.filter(topping => topping.selected === true).map(topping => topping.price).reduce((a, b) => a + b, 0)
    }

    render() {
        const { basePrice, toppings } = this.state
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <CardStyle>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.Name}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{uri:this.props.url || "https://firebasestorage.googleapis.com/v0/b/charkononline.appspot.com/o/projectpicture%2Fdefault.png?alt=media&token=00ee7021-905d-4dce-bf38-ee07833beb91"}}
                        />
                    </View>
                </CardSection>
                <ButtonStyle onPress={() => this.refs.modal3.open()} style={styles.btn}>
                    Buy Now!!!
                </ButtonStyle>
                    <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
                        <View style={styles.containerMain}>
                            <CardSection>
                                <Text style={styles.text}> รายละเอียดสินค้า</Text>
                            </CardSection>
                            <CardSection>
                                <View style={styles.container}>
                                    <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                    {
                                        toppings.map((topping, index) => 
                                            <CheckBox
                                                label={`${topping.name} (${topping.price} บาท)`}
                                                onChange={checked => this.onToppingChange(index, checked)}
                                            />
                                        )
                                    }
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', padding: 10 }}>
                                    <ElementButton onPress={() => this.onSubmit()}
                                        large
                                        icon={{ name: 'envira', type: 'font-awesome' }}
                                        title={`ยืนยัน (รวมทั้งหมด ${this.sumPrice()} บาท)`} />
                                </View>
                            </CardSection>
                        </View>
                    </Modal>
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
        fontSize: 32,
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
export default MenuDetail;