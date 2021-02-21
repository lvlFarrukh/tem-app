import React from 'react'
import { Footer, FooterTab, Button, Text } from 'native-base';
// import FontAwesome from 'react-native-fontawesome';


const MainFooter = ({navigate}) => {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: 'gray'}}>
            <Button onPress={()=>{
                navigate.navigate('Home')
            }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Home</Text>
            </Button>
            <Button onPress={()=>{
                navigate.navigate('Doner')
            }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Doners</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
}

export default MainFooter
