const InitialState = {
    registerStatus: undefined,
    loginStatus: 0, 
    user: undefined
}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action.payload)
    switch (action.type) {
        case 'SETREGISTERSTATUS':
            return ({
                ...state,
                registerStatus: action.payload
            })

        case 'SETSTATUS':
            return ({
                ...state,
                registerStatus: undefined
            })

        case 'LOGINSTATUS':
            return ({
                ...state,
                loginStatus: action.payload.status,
                user: action.payload.userData
            })
    
            
        default:
            break;
    }

    return state;
}