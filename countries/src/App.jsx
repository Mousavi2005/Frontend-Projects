import React from "react";
import Header from './REDUX/COMPONENTS/Header';
import MobileSearchBar from './REDUX/COMPONENTS/MobileSearchBar';
import DesktopDesign from "./REDUX/COMPONENTS/DesktopDesign";
import CountryDetail from './REDUX/COMPONENTS/CountryDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {



  return (
    <>
      {/* <Header /> */}

      <Router>
        <Routes>
          <Route path='/' element= {
            <>
              {/* <MobileSearchBar /> */}
              <DesktopDesign />
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
