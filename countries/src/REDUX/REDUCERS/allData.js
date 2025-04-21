import { createSlice } from "@reduxjs/toolkit";

const allData = createSlice({
    name: 'allData',
    initialState: {
        alldata: null
    },
    reducers: {
        setAllData: (state, action) => {
            state.alldata = action.payload
            // console.log(action.payload)
        }
    }
})

export const allDataReducer = allData.reducer
export const {setAllData} = allData.actions