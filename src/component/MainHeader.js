import React from 'react'
import { Icon, Right, Body, Title, Header, Button, } from 'native-base';


const MainHeader = ({title, mainIcon}) => {
    return (
        <Header style={{backgroundColor: 'gray'}}>
            <Body>
                <Title style={{marginLeft: 10, fontSize: 25, alignSelf: 'center'}}>{title}</Title>
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
