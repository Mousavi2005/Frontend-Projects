import React from "react";
import Search from "./Search";
import CountriesHolder from "./CountriesHolder";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setShowData } from "../REDUCERS/showData";
import { setAllData } from "../REDUCERS/allData";

export default function MobileSearchBar() {

    const [data, setData] = useState(() => [])
    const dispatch = useDispatch()
    const allData = useSelector(state => state.allData).alldata
    const [SSR, setSSR] = useState(() => 'Filter by Region')
    let selectedRegion = ''


      useEffect(() => {     
          fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
              dispatch(setAllData(data));   // Redux dispatch with payload
            })
            .catch(error => console.log(error));
          }, []);
      
      
      useEffect(() => {
    
        dispatch(setShowData(allData))
      }, [allData])
    


      
      function handleOption(e) {
    
        selectedRegion = e.target.value
        setSSR(selectedRegion)
        if (selectedRegion !== 'All') {
    
          const regionFilteredCountries = allData?.filter(o => o.region == selectedRegion)
          dispatch(setShowData(regionFilteredCountries))
        }
        else if (selectedRegion === 'All') {
    
          dispatch(setShowData(allData))
        }
      }

    return(
        <>

              <Search />
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
              <CountriesHolder />
        
        </>
    )
}