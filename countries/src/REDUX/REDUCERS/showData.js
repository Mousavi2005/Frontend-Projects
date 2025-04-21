import { createSlice } from "@reduxjs/toolkit";

const showData = createSlice({
    name: 'showData',
    initialState: {
        data: []
    },
    reducers: {
        setShowData: (state, action) => {
            state.data = action.payload
        }
    }
})
export const showDataReducer = showData.reducer
export const {setShowData} = showData.actions