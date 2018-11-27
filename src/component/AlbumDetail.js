import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native'
import CardStyle from './CardStyle'
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'
import Modal from 'react-native-modalbox'
import RadioGroup from 'react-native-radio-buttons-group'
import CheckBox from 'react-native-checkbox'
import { Icon as ElementIcon, Button as ElementButton } from 'react-native-elements'


class AlbumDetail extends Component {
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
    render() {
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
                            source={require('../../image/default.png')}
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
                                    <Text style={styles.valueText}>
                                        ความหวาน = {selectedButton}
                                    </Text>
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                    <CheckBox
                                        label='ไซรัป 5 บาท'
                                        onChange={(checked) => console.log('select ไซรัป', checked)}
                                    />
                                    <CheckBox
                                        label='วิปปิ้งครีม 10 บาท'
                                        onChange={(checked) => console.log('select วิปปิ้งครีม', checked)}
                                    />
                                    <CheckBox
                                        label='ไข่มุก 5 บาท'
                                        onChange={(checked) => console.log('select ไข่มุก', checked)}
                                    />
                                    <CheckBox
                                        label='เยลลี่ 5 บาท'
                                        onChange={(checked) => console.log('select เยลลี่', checked)}
                                    />
                                </View>
                            </CardSection>
                            <CardSection>
                                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', padding: 10 }}>
                                    <ElementButton onPress={() => this.refs.modal3.close()}
                                        large
                                        icon={{ name: 'envira', type: 'font-awesome' }}
                                        title='ยืนยัน' />
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

AlbumDetail.propTypes = {
    // album: PropTypes.object.isRequired
};
export default AlbumDetail;