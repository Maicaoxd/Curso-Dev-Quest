import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'

const store = configureStore({
    reducer: {
        cartProducts: cartReducer
    }
})

export default store