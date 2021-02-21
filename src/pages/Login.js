import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';

import { Form, Item, Input, Label, Spinner } from 'native-base';

// import components
import AppHeader from '../component/AppHeader'

// import redux actions
import {checkCrediantial} from '../../store/action/index'

const Login = (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [spBtn, setspBtn] = useState(0)

    const login = ()=> {
        if (email !== undefined & password !== undefined){
            let data = {email: email.toLowerCase(), password: password}
            props.checkCrediantial(data)
        }
        else
            alert('Enter email or password')
    }

    useEffect(() => {
        if (props.user.loginStatus === 1) {
            setspBtn(0)
            alert('Wrong PAssword')
        }
        else if (props.user.loginStatus === 2) {
            setspBtn(0)
            alert('User does not exit')
        }
        else if (props.user.loginStatus === 3){
            // alert('Login Successfully!')
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        }
            
    }, [props.user])

    return (
       <View style={styles.container}>
            
            <AppHeader />   

           <View style={styles.loginFields}>
                {/* <Content> */}
                    <Form>
                        <Item regular
                            style={{width: 290, margin: 10, paddingLeft: 10, alignSelf: 'center'}}
                        >
                            <Label>Email</Label>
                            <Input 
                                onChangeText={(text)=> {
                                    setEmail(text)
                                }}
                                keyboardType={'email-address'}
                            />
                        </Item>
                        <Item regular
                            style={{width: 290,margin: 10, paddingLeft: 10, alignSelf: 'center'}}
                        >
                            <Label>Password</Label>
                            <Input 
                                onChangeText={(text)=> {
                                    setPassword(text)
                                }}
                                secureTextEntry={true}
                            />
                        </Item>

                        {spBtn === 0 && 
                            <TouchableOpacity 
                                onPress={()=>{
                                    setspBtn(1)
                                    login()
                                }}
                                style={styles.l_btn}>
                                <Text style={{marginTop: 2,alignSelf: 'center', fontWeight: 'bold',fontSize: 20, color: 'white'}}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        }

                        {spBtn === 1 &&
                            <Spinner color='gray' />
                        }

                    </Form>
                {/* </Content> */}

                <Text style={{fontSize: 16,alignSelf: 'center'}}>
                    If you are new, <Text 
                        style={{fontWeight: 'bold', color: 'darkred'}}
                        onPress={()=>{
                            props.navigation.navigate('Register')
                        }}
                    >Register</Text> Here!
                </Text>
           </View>
       </View>
    )
}

const mapStateToProps = (state) => ({ 
    user: state.user
})
    
const mapDispatchToProps = (dispatch)=> ({
    checkCrediantial: (data)=> { dispatch(checkCrediantial(data)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    loginFields: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        height: 290,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 1,
    //     },
    //         shadowOpacity: 0.22,
    //         shadowRadius: 2.22,
    //         elevation: 0,
    },
    l_btn: {
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: '#4b4948',
        width: 120,
        height: 35,
        borderRadius: 20,
    }
})