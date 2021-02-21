import React from 'react'
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


const DonnerList = ({data}) => {
    return (
        
        <ListItem thumbnail>
            <Left>
                <Thumbnail style={{borderWidth: 2}} square source={require('../../media/user.png')} />
            </Left>
            <Body>
                <Text>{data.fullname}</Text>
                <Text note numberOfLines={1}>Blood Group: {data.bloodgroup}</Text>
                <Text note numberOfLines={1}>Contact No: {data.number}</Text>
            </Body>
            
        </ListItem>
        
    )
}

export default DonnerList
