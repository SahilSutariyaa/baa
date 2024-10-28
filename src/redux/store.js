import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slice/card";
import wishListSlicesReducer from "./slice/wishList";



const store = configureStore({
    reducer: {
        card: cartSliceReducer,
        list: wishListSlicesReducer

    }
})


export default store;