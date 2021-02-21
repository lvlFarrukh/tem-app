import React, {useState, useEffect} from 'react'
import {ScrollView} from 'react-native'
import {H3, Container, List } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';

import DonnerList from '../component/DonnerList'
import MainFooter from '../component/MainFooter'
import MainHeader from '../component/MainHeader'

import { connect } from 'react-redux';
import {getDoner} from '../../store/action/index'


const DonerPage = (props) => {
    const [bloodG, setBloodG] = useState(undefined)
    // const [doner, setDoner] = useState(undefined)

    const filterDoner = bg =>{
        props.getDoner(bg)
    }

    const showList = ()=>{
        return props.doner.doners.map( (v, i)=>{
            <DonnerList key={i}/>
        })
    }

    // useEffect(() => {
    //     setDoner(props.doner.doners)
    // }, [props.doner])

    return (
        <Container>

            <MainHeader title={'Doner'} mainIcon={'person'} />

                    <H3 style={{alignSelf: 'center', fontWeight: 'bold', margin: 20}}>Select Recever Blood Group</H3>

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
                        style={{borderWidth: 0,backgroundColor: '#d4d4d4', width: 300, alignSelf: 'center'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: 'white' ,width: 300, alignSelf: 'center', zIndex: 1}}
                        onChangeItem={item => {
                            setBloodG(item.value)
                            filterDoner(item.value)
                        }}
                    />  
                
                <ScrollView>

                    <List 
                        style={{zIndex: 0}}
                        dataArray={props.doner.doners}
                        renderRow={(v, i) => <DonnerList data={v} key={i}/>}
                    />
                </ScrollView>

            <MainFooter navigate = {props.navigation}/>

        </Container>

    )
}

const mapStateToProps = (state) => ({ 
    user: state.user,
    doner: state.doner
})
    
const mapDispatchToProps = (dispatch)=> ({
    getDoner: (item)=> { dispatch(getDoner(item)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(DonerPage)
