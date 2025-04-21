import { configureStore } from "@reduxjs/toolkit";
// import { regionReducer } from "./REDUCERS/region";
// import { searchReducer } from "./REDUCERS/search";
import { allDataReducer } from "./REDUCERS/allData";
import { showDataReducer } from "./REDUCERS/showData";
import { clickCountryReducer } from "./countryClicked";

const store = configureStore({
    reducer: {
        isCountrySelected: clickCountryReducer,
        allData: allDataReducer,
        showData: showDataReducer
    }
})

export default store