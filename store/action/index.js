import database from '@react-native-firebase/database';

const authenticate = (data)=> {
    let status = undefined
    let user = []
    let regUser = []
    let email = data[0]['email']

    return (dispatch)=> {
        database().ref('users').once('value', async data =>{
            await user.push(data.val())
            Object.keys(user[0]).forEach(function(key) {
                regUser.push(key)
            });
            regUser.find(element => element === email) === undefined ? status = 0 : status = 1

            dispatch({type: "SETREGISTERSTATUS", payload: status})
        })        
    }
}

const checkCrediantial = (data) =>{
    let user = []
    const email = data.email.split('@')[0]
    const password = data.password
    return (dispatch)=> {
        database().ref(`users/${email}`).once('value', async data =>{
            await user.push(data.val())
            
            if (user[0] === null) 
                dispatch({type: "LOGINSTATUS", payload: {status: 2, userData: null}})
            else if (user[0].password !== password)
                dispatch({type: "LOGINSTATUS", payload: {status: 1, userData: null}})
            else
                dispatch({type: "LOGINSTATUS", payload: {status: 3, userData: user}})
        });        
    }
}

const register = (data)=> {
    email = data[0]['email'].split('@')[0]
    return (dispatch)=> {
        database().ref(`/users/${email}`).set(data[0])
        
        dispatch({type: "SETSTATUS", payload: undefined})
    }
}

const getDoner = (bg) =>{
    let filterDoners = []
    let doners = []
    return (dispatch)=> {
        database().ref('users').on('value', async snapshot =>{
            await doners.push(snapshot.val())

                if (bg === 'A+') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'A+' && filterDoners.push(value)
                        value.bloodgroup === 'A-' && filterDoners.push(value)
                        value.bloodgroup === 'O+' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                
                }
                else if (bg === 'A-') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'A-' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'B+') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'B+' && filterDoners.push(value)
                        value.bloodgroup === 'B-' && filterDoners.push(value)
                        value.bloodgroup === 'O+' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'B-') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'B+' && filterDoners.push(value)
                        value.bloodgroup === 'B-' && filterDoners.push(value)
                        value.bloodgroup === 'O+' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'AB+') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'AB-') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'AB-' && filterDoners.push(value)
                        value.bloodgroup === 'A-' && filterDoners.push(value)
                        value.bloodgroup === 'B-' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'O+') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'O+' && filterDoners.push(value)
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
                else if (bg === 'O-') {
                    for (const [key, value] of Object.entries(doners[0])) {
                        value.bloodgroup === 'O-' && filterDoners.push(value)
                    }
                    dispatch({type: "SETDONERS", payload: filterDoners})
                }
            // },3000)
            
        })        
    }
}

export {
    authenticate,
    register,
    checkCrediantial,
    getDoner
}