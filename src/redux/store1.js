import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice1 from "./slices1/wishlistSlice1";
import cartSlice from "./slices1/cartSlice";

const store1=configureStore({
    reducer:{
        wishlistReducer:wishlistSlice1,
        cartReducer:cartSlice

    }
})
export default store1