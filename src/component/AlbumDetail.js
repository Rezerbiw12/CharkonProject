import React, { Component } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import CardStyle from './CardStyle';
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'
import ButtonDetail from './ButtonDetail'


class AlbumDetail extends Component {


    // const {Discription, Name, Price} = this.props;

    constructor(props) {
        super();        
    }

    renderButtonDetail = () => {
        console.log('Render button detail')
        return ( <ButtonDetail /> );
    }

    render() {
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
                <ButtonStyle onPress={() => this.renderButtonDetail()}>
                    Buy Now!!!
                </ButtonStyle>
            </CardStyle>
        );
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    headerTextStyle: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    thumbnailStyle: {
        height: 300,
        width: 300,
        margin : 20
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
    }
})

AlbumDetail.propTypes = {
    // album: PropTypes.object.isRequired
};
export default AlbumDetail;