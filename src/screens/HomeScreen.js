import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Left, Right, Icon, Title, Footer, FooterTab, Button, Badge } from 'native-base'
import { SearchBar } from 'react-native-elements'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
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
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text> HomeScreen </Text>
                </View>
                <Footer>
                    <FooterTab>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default HomeScreen;

