import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const isACountryClicked = createSlice({
    name: 'isClicked',

    initialState: {
        id: null,
        flag: null,
        name: null,
        nativeName: null,
        population: null,
        region: null,
        subRegion:null,
        capital: null,
        topLevelDomain: null,
        currencies: null,
        languages: null,
        borderCountries: null,
        isClicked: false
    },
    reducers: {
        setClickedToTrue: (state, action) => {
            state.isClicked = true
            state.id = action.payload.id
            state.flag = action.payload.flag
            state.name = action.payload.name
            state.nativeName = action.payload.nativeName
            state.population = action.payload.population
            state.region = action.payload.region
            state.subRegion = action.payload.subRegion
            state.capital = action.payload.capital
            state.topLevelDomain = action.payload.topLevelDomain
            state.currencies = action.payload.currencies
            state.languages = action.payload.languages
            state.borderCountries = action.payload.borderCountries
        },
        setClickedToFalse: (state, action) => {
            state.isClicked = false
            state.id = null
        }
    }
})

export const clickCountryReducer = isACountryClicked.reducer
export const {setClickedToFalse, setClickedToTrue} = isACountryClicked.actions