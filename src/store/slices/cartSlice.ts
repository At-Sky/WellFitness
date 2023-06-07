import {createSlice} from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addProduct(state, action) {
// TODO: ртк апи это то что нужно там все меняется ка кнадо, надо разобраться нахуя тогда этот сторnpm

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
