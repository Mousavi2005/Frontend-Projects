import React from "react";
import { useDispatch } from "react-redux";
import { setShowData } from "../REDUCERS/showData";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SelectOption() {
    let selectedRegion = ''
    const [SSR, setSSR] = useState(() => 'Filter by Region')
    const dispatch = useDispatch()
    // const allData = useSelector(state => state.allData).allData
    const allData = useSelector(state => state.allData).alldata
    
    const showData = useSelector(state => state.showData)



    function handleOption(e) {
        console.log("run")
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
      console.log(allData)

    return (

        <select className='w-60 ml-7 mb-4 p-3 bg-white rounded-xl h-14 dark:bg-[#2b3945] dark:text-white'
          defaultValue=''
        >
          <option value="" disabled hidden>
            Filter by Region
          </option>
            <option value='All' onClick={handleOption}>All</option>
            <option value="Africa" onClick={handleOption}>Africa</option>
            <option value="Americas" onClick={handleOption}>America</option>
            <option value="Asia" onClick={handleOption}>Asia</option>
            <option value="Europe" onClick={handleOption}>Europe</option>
            <option value="Oceania" onClick={handleOption}>Oceania</option>

        </select>
    )
}