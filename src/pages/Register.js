import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, } from 'react-native'
import { connect } from 'react-redux';

import { Content, Form, Item, Input, Label, Spinner } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

// import components
import AppHeader from '../component/AppHeader'


// import redux actions
import {authenticate, register} from '../../store/action/index'

import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = (props) => {
    const [bloodG, setBloodG] = useState(undefined)
    const [bloodP, setBloodP] = useState(undefined)
    const [diebetes, setDiebetes] = useState(undefined)
    const [fName, setfName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [city, setCity] = useState(undefined)
    const [town, setTown] = useState(undefined)
    const [number, setNumber] = useState(undefined)
    const [disease, setDisease] = useState(undefined)

    const [spBtn, setspbtn] = useState(0)

    // console.log(props.user.registerStatus)

    const setData = ()=> {
        let dataObj = {}
        dataObj['fullname'] = fName
        dataObj['email'] = email.toLowerCase()
        dataObj['password'] = password
        dataObj['city'] = city === undefined ? 'null': city
        dataObj['town'] = town === undefined ? 'null': town
        dataObj['number'] = number
        dataObj['bloodgroup'] = bloodG
        dataObj['bloodpressure'] = bloodP
        dataObj['diebetes'] = diebetes
        dataObj['disease'] = disease === undefined ? 'null': disease

        return dataObj
    }

    const Register = ()=> {
        let dataObj = []
        fName !== undefined &
        email !== undefined &
        password !== undefined &
        number !== undefined &
        bloodG !== undefined &
        bloodP !== undefined &
        password !== undefined &
        diebetes !== undefined &&
        dataObj.push(setData())

        dataObj.length !== 0 ? props.authenticate(dataObj) :  alert('Please fill all Field')      
            //     props.authenticate()
    }

    useEffect( () => {
        if (props.user.registerStatus === 1) {
            setspbtn(0)
            alert('User already exist')
        }
        else if(props.user.registerStatus === 0){
            let dataObj = []
            dataObj.push(setData())
            props.register(dataObj)
            alert('Registered Successfully!')
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });

        }            
    }, [props.user])
   
    return (
        <Content>

            <View style={styles.container}>
                
                <AppHeader />   

                <View style={styles.loginFields}>
                    <Form>
                        <View style={{margin: 0}}>
                            <Text style={{alignSelf: 'center',fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>REGISTRATION</Text>
                        </View>

                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>Full Name</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setfName(text)
                                }}
                                autoCompleteType={'off'}/>
                        </Item>

                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>Email</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setEmail(text)
                                }}
                                autoCompleteType={'email'}
                                keyboardType={'email-address'}
                            />
                        </Item>

                        <Item regular 
                            style={styles.extraField}
                        >
                            <Label>Password</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setPassword(text)
                                }}
                                secureTextEntry={true}/>
                        </Item>


                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>City</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setCity(text)
                                }}
                                autoCompleteType={'off'}/>
                        </Item>

                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>Town</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setTown(text)
                                }}
                                autoCompleteType={'off'}/>
                        </Item>

                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>Phone Number</Label>
                            <Input 
                                onChangeText={(text)=>{
                                    setNumber(text)
                                }}
                                keyboardType={'number-pad'}/>
                        </Item>

                        <Text style={{fontWeight: 'bold',marginLeft: 20}}>Blood Group</Text>
                        <DropDownPicker
                            placeholder={'Select'}
                            items={[
                                {label: 'A+', value: 'A+'},
                                {label: 'A-', value: 'A-'},
                                {label: 'B+', value: 'B+'},
                                {label: 'B-', value: 'B-'},
                                {label: 'AB+', value: 'AB+'},
                                {label: 'AB-', value: 'AB-'},
                                {label: 'O+', value: 'O+'},
                                {label: 'O-', value: 'O-'},
                            ]}
                            defaultValue={bloodG}
                            containerStyle={{height: 50, marginTop: 5, marginBottom: 20}}
                            style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                            onChangeItem={item => setBloodG(item.value)}
                        />   

                        <Text style={{fontWeight: 'bold',marginLeft: 20}}>Blood Pressure</Text>
                        <DropDownPicker
                            placeholder={'Select'}
                            items={[
                                {label: 'Yes', value: 'Yes'},
                                {label: 'No', value: 'No'},
                                
                            ]}
                            defaultValue={bloodP}
                            containerStyle={{height: 50, marginTop: 5, marginBottom: 20}}
                            style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                            onChangeItem={item => setBloodP(item.value)}
                        />   

                        <Text style={{fontWeight: 'bold',marginLeft: 20}}>Diabetes</Text>
                        <DropDownPicker
                            placeholder={'Select'}
                            items={[
                                {label: 'Yes', value: 'Yes'},
                                {label: 'No', value: 'No'},
                                
                            ]}
                            defaultValue={diebetes}
                            containerStyle={{height: 50, marginTop: 5}}
                            style={{borderWidth: 0,backgroundColor: 'white', width: 300, alignSelf: 'center'}}
                            itemStyle={{
                                justifyContent: 'flex-start',
                            }}
                            dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', }}
                            onChangeItem={item => setDiebetes(item.value)}
                        /> 

                        <Item regular
                            style={styles.extraField}
                        >
                            <Label>Any other Disease</Label>
                            <Input 
                                onChangeText={(text) =>{
                                    setDisease(text)
                                }}
                            />
                        </Item>

                        {spBtn === 0 && 
                            <TouchableOpacity 
                                onPress={()=> {
                                    setspbtn(1)
                                    Register()
                                }}
                                style={styles.l_btn}>
                                    <Text style={{marginTop: 2,alignSelf: 'center', fontWeight: 'bold',fontSize: 20, color: 'white'}}>
                                        Register
                                    </Text>
                            </TouchableOpacity>
                        }       
                        
                    </Form>
                </View>
            </View>
        </Content>

    )
}

const mapStateToProps = (state) => ({ 
    user: state.user
})
    
const mapDispatchToProps = (dispatch)=> ({
    authenticate: (data)=> { dispatch(authenticate(data)) },
    register: (data)=> { dispatch(register(data)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    extraField: {
        margin: 10, 
        paddingLeft: 10, 
        alignSelf: 'center',
        width: 290,
        alignSelf: 'center'
    },
    loginFields: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        // height: 290,
    },
    l_btn: {
        alignSelf: 'center',
        margin: 50,
        backgroundColor: '#4b4948',
        width: 120,
        height: 35,
        borderRadius: 20,
    },
})