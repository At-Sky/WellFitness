import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '@store/slices/cartSlice.ts'

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})
