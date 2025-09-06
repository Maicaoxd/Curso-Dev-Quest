export default function reducer(state = [], action ){
    if(action.type === 'ADD_PRODUCT_TO_CART'){
        return [...state, action.payload]
    }
    return state
}  