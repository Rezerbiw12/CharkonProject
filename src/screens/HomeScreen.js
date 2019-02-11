import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import { SearchBar } from 'react-native-elements'
import MenuDetail from '../component/MenuDetail'
import firebase from 'firebase'
import { YellowBox } from 'react-native';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class HomeScreen extends Component {
    state = {url:'',Discription:'', Name:'', Price:'',data: []}
    readUserData = () =>  {
        firebase.database().ref('Product/').on('value', (snapshot) => {
            var data =[]
            snapshot.forEach((child) => {
                data.push({
                  Name:child.val().Name,
                  Discription:child.val().Discription,
                  Price:child.val().Price,
                  url:child.val().url,
                });

             })
             console.log('DataOfMenu',data)
            this.setState({data})
        });
    }
    // WriteUserData(){
    //     firebase.database().ref('Orders/Users3/Item1').set(
    //         {
                
    //             status:'ส่งแล้ว',
    //             message:'หวานน้อย'
    //         }
    //     )
    //     firebase.database().ref('Orders/Users3/Item1/Addons/Addons3').set(
    //         {
                
    //             Name:'ไข่มุก',
    //             Price:'5'
    //         }
    //     )
    //     firebase.database().ref('Orders/Users3/Item1/Product1').set(
    //         {
                
    //             Discription:'เย็น',
    //             Name:'ชานม',
    //             Price:'20'
    //         }
    //     ).then(()=>{
    //         console.log('INSERTED')
    //     }).catch((error)=>{
    //         console.log(error)
    //     });
    // }
    componentWillMount() {
        //this.WriteUserData()
        this.readUserData() 
      }
    
    renderMenu() {
        return this.state.data.map(menu => 
            <MenuDetail key={menu.Name} Description={menu.Discription} Name={menu.Name} Price={menu.Price} url={menu.url}/>
        );
      }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        // console.log('--------',this.state.Discription);
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
                    {this.renderMenu()}
                </ScrollView>
        <Footer>
          <FooterTab>
            <Button active badge vertical>
              <Badge ><Text>2</Text></Badge>
              <Icon active name="basket" />
              <Text>ตะกร้า</Text>
            </Button>
          </FooterTab>
        </Footer>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;