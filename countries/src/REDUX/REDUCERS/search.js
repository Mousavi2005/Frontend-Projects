import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: 'search',
    initialState: {
        searchedWord: ''
    },
    reducers: {
        setSearchedWord: (state, action) => {
            state.searchedWord = action.payload.word
        }   
    }
})

export const searchReducer = search.reducer
export const {setSearchedWord} = search.actions