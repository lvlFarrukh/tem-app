import React, {useEffect} from 'react'
// import {BackHandler} from 'react-native'
import {H3, H2,Card, CardItem, Icon, Right, Body, Title, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { connect } from 'react-redux';


import MainFooter from '../component/MainFooter'
import MainHeader from '../component/MainHeader'

const Home = (props) => {
  
    return (
        <Container>
        
        <MainHeader  title={'Home'} mainIcon={'home'} />

        <Card style={{width: 330, alignSelf: 'center', marginTop: 15}}>
            <CardItem>
              <Body>
                <Text style={{fontSize: 15, marginBottom: 5}}>Blood Group: {props.user.user && props.user.user[0]['bloodgroup']}</Text>
                <H2 style={{fontWeight:'bold'}}>Hello, {props.user.user && props.user.user[0]['fullname'].split(' ')[0]}</H2>
              </Body>
            </CardItem>
        </Card>

        <Card style={{width: 330, alignSelf: 'center', marginTop: 15}}>
            <CardItem>
              <Body>
                <H2 style={{marginBottom: 5, color: 'green', fontWeight: 'bold'}}>Coming Soon</H2>
              </Body>
            </CardItem>
        </Card>

        <Content />
        
        <MainFooter navigate = {props.navigation}/>

      </Container>
    )
}

const mapStateToProps = (state) => ({ 
  user: state.user
})
  
const mapDispatchToProps = (dispatch)=> ({
  checkCrediantial: (data)=> { dispatch(checkCrediantial(data)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
