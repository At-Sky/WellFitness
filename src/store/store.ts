import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '@store/slices/cartSlice.ts'
import {cartApi} from "@store/api/cartApi.ts";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware)
})
