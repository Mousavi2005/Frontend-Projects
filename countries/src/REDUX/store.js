import { configureStore } from "@reduxjs/toolkit";
import { regionReducer } from "./REDUCERS/region";
import { searchReducer } from "./REDUCERS/search";

const store = configureStore({
    reducer: {
        region: regionReducer,
        search : searchReducer
    }
})

export default store