import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';
import CardSection from './CardSection'
import ButtonStyle from './ButtonStyle'


const AlbumDetail =  props => {    
    const { Discription, Name, Price} = props; 

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
                <Text>
                    {Name}
                </Text>
                {/* <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <ButtonStyle onPress={() => Linking.openURL(url)}>
                    Buy Now!!!
                </ButtonStyle> */}
            </CardSection>
        </CardStyle>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
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