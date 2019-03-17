import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import CardStyle from './CardStyle'
import CardSection from './CardSection'
import { YellowBox } from 'react-native'
import Modal from 'react-native-modalbox'
import RadioGroup from 'react-native-radio-buttons-group'
import ButtonStyle from './ButtonStyle'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: 'กำลังทำ',
                    value: "กำลังทำ",
                },
                {
                    label: 'ไม่ทำเมนูนี้',
                    value: "ไม่ทำเมนูนี้",
                    selected: true
                },
                {
                    label: 'เสร็จแล้ว',
                    value: "เสร็จแล้ว",
                },
            ],
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
        };
    }
    onSubmit = () => {
        this.refs.modal3.close()
    }
    render() {
        return (
            <CardStyle>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.username}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text style={styles.textForm}>
                            <Text style={{ color: 'blue' }}>รายละเอียดของเมนู : </Text>{this.props.name}  {this.props.toppings} {this.props.level}
                        </Text>
                    </View>

                </CardSection>
                <CardSection>
                    <View>
                        <Text style={styles.textForm}>
                            <Text style={{ color: 'blue' }}>ราคา :</Text> {this.props.price} บาท
                            </Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View>
                        <Text style={styles.textForm}>
                            <Text style={{ color: 'blue' }}>สถานะ :</Text> <Text style={{ color: 'red' }}>{this.props.status} </Text>
                        </Text>
                        <ButtonStyle onPress={() => this.refs.modal3.open()} style={styles.btn}>
                            อัพเดท!!
                        </ButtonStyle>
                    </View>
                </CardSection>
                     <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}>
                        <View style={styles.containerMain}>
                            {/* <CardSection>
                                <Text style={styles.text}> อัพเดท status</Text>
                            </CardSection> */}
                            <CardSection>
                                <View style={styles.container}>
                                    <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                                    <ElementButton onPress={() => this.onSubmit()}
                                        large
                                        icon={{ name: 'envira', type: 'font-awesome' }}
                                        title={`ยืนยัน`}
                                    />
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
        flex:1
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

export default OrderDetail;
