import React from 'react'
import { Icon, Right, Body, Title, Header, Button, } from 'native-base';


const MainHeader = ({title, mainIcon}) => {
    return (
        <Header style={{backgroundColor: '#8e0808'}}>
            <Body>
                <Title style={{marginLeft: 10, fontSize: 25}}><Icon style={{color: 'white'}} name={mainIcon}/> {title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    {/* <Icon name='' /> */}
                </Button>
            </Right>
        </Header>
    )
}

export default MainHeader
