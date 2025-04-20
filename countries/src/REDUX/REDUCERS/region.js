import { createSlice } from "@reduxjs/toolkit";

const region = createSlice({
    name: 'region',
    initialState: {
        region: 'Filte by Region'
    },
    reducers: {
        changeRegion: (state, action) => {
            state.region = action.payload.region
        }
    }
})

export const regionReducer = region.reducer
export const {changeRegion} = region.actions