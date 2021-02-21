const InitialState = {
    doners: undefined
}

export default ( state = InitialState, action ) => {
    // console.log("action==>", action.payload)
    switch (action.type) {
        case 'SETDONERS':
            return ({
                ...state,
                doners: action.payload
            })

        default:
            break;
    }

    return state;
}