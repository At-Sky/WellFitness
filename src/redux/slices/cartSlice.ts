import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addProduct(state, action) {


            state.products.push({

            })
        },
        removeProduct(state, action){},
        clearCart(state, action){},
    },
})

export const {
    addProduct,
    removeProduct,
    clearCart
} = cartSlice.actions
export default cartSlice.reducer;
