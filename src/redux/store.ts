import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '@redux/slices/cartSlice.ts'

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})
