import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import categoryReducer from "./categorySlice"

export const store = configureStore({
    reducer: {
        // search videos on title 
        search: searchReducer,
        // category wise videoType 
        category: categoryReducer
    },
})