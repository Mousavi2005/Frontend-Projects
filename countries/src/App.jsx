import { useEffect, useState } from 'react'
import React from "react";
import Header from './REDUX/COMPONENTS/Header';
import MobileSearchBar from './REDUX/COMPONENTS/MobileSearchBar';
import CountryDetail from './REDUX/COMPONENTS/CountryDetail';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setShowData } from './REDUX/REDUCERS/showData';
import { setAllData } from './REDUX/REDUCERS/allData';
import './App.css'

function App() {
  
  // const [data, setData] = useState(() => [])
  // const dispatch = useDispatch()
  // const allData = useSelector(state => state.allData).alldata
  // const [SSR, setSSR] = useState(() => 'Filter by Region')
  // let selectedRegion = ''

  // useEffect(() => {     
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then(res => res.json())
  //       .then(data => {
  //         dispatch(setAllData(data));   // Redux dispatch with payload
  //       })
  //       .catch(error => console.log(error));
  //     }, []);
  
  
  // useEffect(() => {

  //   dispatch(setShowData(allData))
  // }, [allData])

  // function handleOption(e) {

  //   selectedRegion = e.target.value
  //   setSSR(selectedRegion)
  //   if (selectedRegion !== 'All') {

  //     const regionFilteredCountries = allData?.filter(o => o.region == selectedRegion)
  //     dispatch(setShowData(regionFilteredCountries))
  //   }
  //   else if (selectedRegion === 'All') {

  //     dispatch(setShowData(allData))
  //   }
  // }



  return (
    <>
      <Header />

      <Router>
        <Routes>

          <Route path='/' element= {
            <>
              <MobileSearchBar />
              {/* <Search />
              <select className='w-60 ml-7 mb-4 p-3 bg-white rounded-xl h-14'
                  value={selectedRegion}
              >

                <option value="" disabled hidden>
                  {SSR}
                </option>
                <option value='All' onClick={handleOption}>All</option>
                <option value="Africa" onClick={handleOption}>Africa</option>
                <option value="Americas" onClick={handleOption}>America</option>
                <option value="Asia" onClick={handleOption}>Asia</option>
                <option value="Europe" onClick={handleOption}>Europe</option>
                <option value="Oceania" onClick={handleOption}>Oceania</option>

              </select>
              <CountriesHolder /> */}

              </>
          }/>
          <Route path='/detail' element={<CountryDetail />} />



        </Routes>


      </Router>

    </>
  )
}

          {/* <Search />
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
          <CountriesHolder /> */}

export default App
