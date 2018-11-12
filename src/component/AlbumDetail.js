import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'
import ButtonDetail from './ButtonDetail'


const AlbumDetail = props => {
    const { Discription, Name, Price } = props;

    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    return (

        <CardStyle>
                <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{Name}</Text>
                </View>
                </CardSection>
                <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={require('../../image/default.png')}
                    />
                </View>
                </CardSection>
                <ButtonStyle onPress={ButtonDetail}>
                    Buy Now!!!
                </ButtonStyle>
        </CardStyle>
    );
};
const styles = {
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
};
AlbumDetail.propTypes = {
    // album: PropTypes.object.isRequired
};
export default AlbumDetail;