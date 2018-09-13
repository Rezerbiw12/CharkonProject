import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';
 
const AlbumDetail = (props)=>{
    return (
        <CardStyle>
        <Text>{props.album.title}</Text>
        </CardStyle>
    );
};
 
AlbumDetail.propTypes = {
    album: PropTypes.object.isRequired
  };
 
// export to render
export default AlbumDetail;