import store from './reducer/index';
// // import product from './reducer/product';
import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

const configureStore = () => createStore(
    store,
    applyMiddleware(thunk)
)

export default configureStore;
// export default createStore(
//     store,
//     applyMiddleware(thunk)
// );