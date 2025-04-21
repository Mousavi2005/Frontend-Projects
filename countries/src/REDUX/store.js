import { configureStore } from "@reduxjs/toolkit";
import { regionReducer } from "./REDUCERS/region";
import { searchReducer } from "./REDUCERS/search";
import { allDataReducer } from "./REDUCERS/allData";
import { clickCountryReducer } from "./countryClicked";

const store = configureStore({
    reducer: {
        region: regionReducer,
        search : searchReducer,
        isCountrySelected: clickCountryReducer,
        allData: allDataReducer
    }
})

export default store