import React,{Component} from 'react';
import {Text,View,Image} from 'react-native';
import PropTypes from 'prop-types';
import CardStyle from './CardStyle';
 
const CoinDetail = (props)=>{
    return (
        <View>
            <CardStyle>
            <View  style={coinDetailStyle.containerMain}>
                    <Image style={coinDetailStyle.coinIconStyle} 
                           source={ {uri:props.coin.coin_icon_url}}/>
                           <View  style={coinDetailStyle.containerCoinName}>
                    <Text style={coinDetailStyle.textCoinSymbol}>{props.coin.symbol}</Text>
                    <Text  style={coinDetailStyle.textCoinName}>{props.coin.name}</Text>
                    </View>
 
                    <Text style={coinDetailStyle.textCoinPrice}>${props.coin.price}</Text>
                </View>
                
            </CardStyle>
        </View>
    );
};
 
CoinDetail.propTypes = {
    coin : PropTypes.object
};
 
const coinDetailStyle ={
    containerMain:{
        flexDirection: 'row'
    },
    containerCoinName:{
        flexDirection: 'column',
        marginLeft: 8,
        flex: 1,
    },
    coinIconStyle :{
        height :50,
        width:50
    },
    textCoinName:{
        fontSize: 14,
    },
    textCoinSymbol:{
        fontSize:20,
        fontWeight: 'bold',
    },
    textCoinPrice:{
        fontSize:20,
    }
 
};
 
// export to render
export default CoinDetail;