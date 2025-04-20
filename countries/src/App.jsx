import { useState } from 'react'
import React from "react";
// impo React
import Header from './REDUX/COMPONENTS/Header';
import Search from './REDUX/COMPONENTS/Search';
import CountriesHolder from './REDUX/COMPONENTS/CountriesHolder';
import { changeRegion } from './REDUX/REDUCERS/region';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css'

function App() {
  const dispatch = useDispatch()
  const regionState = useSelector(state => state.region)


  function handleOption(e) {
    const selectedRegion = e.target.value
    // console.log(regionState)
    // console.log(selectedRegion)
    dispatch(changeRegion({region: selectedRegion}))
  }
  // console.log(regionState)

  return (
    <>
      <Header />
      <Search />
      <select className='w-60 ml-7 p-3 bg-white rounded-xl h-14' 
              defaultValue=''
              onChange={handleOption}
      >

        <option value="" disabled hidden>
          {regionState.region}
        </option>
        <option value='Filte by Region'>All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>

      </select>
      <CountriesHolder />
    </>
  )
}

export default App
