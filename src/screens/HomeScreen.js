import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import { SearchBar } from 'react-native-elements'
import MenuDetail from '../component/MenuDetail'
import firebase from 'firebase'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class HomeScreen extends Component {
    state = { url: '', Discription: '', Name: '', Price: '', data: [], search: '', isOpen: true }
    readUserData = () => {
        firebase.database().ref('Product/').on('value', (snapshot) => {
            var data = []
            snapshot.forEach((child) => {
                data.push({
                    Name: child.val().Name,
                    Discription: child.val().Discription,
                    Price: child.val().Price,
                    url: child.val().url,
                });

            })
            console.log('DataOfMenu', data)
            this.setState({ data })
        });
        firebase.database().ref('Status/status').on('value', (snapshot) => {
            let status = snapshot.val()
            this.setState({
                isOpen: status === 'เปิดร้าน' ? true : false
            })
        });
    }
    componentWillMount() {
        this.readUserData()
    }

    renderMenu() {
        const { search } = this.state
        return this.state.data.filter(menu => search.trim() === '' || menu.Name.indexOf(search.trim()) !== -1).map((menu, index) =>
            <MenuDetail key={index} navigation={this.props.navigation} Description={menu.Discription} Name={menu.Name} Price={menu.Price} url={menu.url} />
        );
    }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        const { isOpen } = this.state
        const { search } = this.props
    
        return (
            <Container>
                <Header>
                    <Right>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Title>CharkonOnline</Title>
                        </View>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Right>
                </Header>
                <View >
                    <SearchBar
                        lightTheme
                        onChangeText={(text) => this.setState({ search: text })}
                        onClearText={(text) => this.setState({ search: text })}
                        icon={{ type: 'font-awesome', name: 'search' }}
                        placeholder='เช่นชานมไข่มุก...'
                        value={search}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        {isOpen === true && this.renderMenu()}
                        {isOpen === false && <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><Image source={require('../../image/close-icon.png')} style={{ height: 120, width: 120, marginTop: 20 }} /><Text style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}>Sorry We're "CLOSE"</Text></View>}
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;