import { legacy_createStore as createStore, combineReducers } from 'redux'
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
    cartProducts: cartReducer
})
const store = createStore(rootReducer)


export default store