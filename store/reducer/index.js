import doners from './doners'
import user from './user'

import { combineReducers } from 'redux'

export default combineReducers({
    doner: doners,
    user: user
})