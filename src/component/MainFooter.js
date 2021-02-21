import React from 'react'
import { Footer, FooterTab, Button, Text } from 'native-base';
// import FontAwesome from 'react-native-fontawesome';


const MainFooter = ({navigate}) => {
    return (
        <Footer>
          <FooterTab style={{backgroundColor: '#8e0808'}}>
            <Button onPress={()=>{
                navigate.navigate('Home')
            }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Home</Text>
            </Button>
            <Button onPress={()=>{
                navigate.navigate('Doner')
            }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Find Doner</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
}

export default MainFooter
