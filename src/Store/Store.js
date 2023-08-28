import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./Cartsilice";
import items from "./items";
const store = configureStore({
    reducer:{
        cart : cartslice,
        items : items, 

    }
});
export default store;