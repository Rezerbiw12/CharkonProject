import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import { SearchBar } from 'react-native-elements'
import axios from 'axios';
import AlbumDetail from '../component/AlbumDetail'
import firebase from 'firebase'

class HomeScreen extends Component {
    state = { albums: [],Addons:[{ status:'',message:''}]}
    readUserData() {
        firebase.database().ref('Product/').on('value', function (snapshot) {
            console.log('data------',snapshot.val())
        });
    }
    WriteUserData(){
        firebase.database().ref('Orders/Users3/Item1').set(
            {
                
                status:'ส่งแล้ว',
                message:'หวานน้อย'
            }
        )
        firebase.database().ref('Orders/Users3/Item1/Addons/Addons3').set(
            {
                
                Name:'ไข่มุก',
                Price:'5'
            }
        )
        firebase.database().ref('Orders/Users3/Item1/Product1').set(
            {
                
                Discription:'เย็น',
                Name:'ชานม',
                Price:'20'
            }
        ).then(()=>{
            console.log('INSERTED')
        }).catch((error)=>{
            console.log(error)
        });
    }
    componentWillMount() {
       this.WriteUserData()
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        this.readUserData() 
      }
      renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
      }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        console.log(this.state);
        return (
            <Container>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>Home</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View >
                    <SearchBar
                        lightTheme
                        onChangeText={(text) => this.setState({ text })}
                        onClearText={(text) => this.setState({ text })}
                        icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder='เช่นชานมไข่มุก...'
                         />
                </View>
                <View style={{ flex:1}}>
                <ScrollView>
                {this.renderAlbums()}
                </ScrollView>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;


