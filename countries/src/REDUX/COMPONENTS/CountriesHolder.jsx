import React, { use, useEffect, useState } from "react"
import { setAllData } from "../REDUCERS/allData"
import { useDispatch } from "react-redux"
import Country from "./Country"
import { useSelector } from "react-redux"

export default function CountriesHolder() {
    const [data, setData] = useState(() => [])
    const [showData, setShowData] = useState(() => [])
    const region = useSelector(state => state.region)
    const allData = useSelector(state => state.allData)
    const searchedWord = useSelector(state => state.search.searchedWord)

    const dispatch = useDispatch()


    useEffect(() => {     
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => {
            setData(data);                 // local state update
            dispatch(setAllData(data));   // Redux dispatch with payload
          })
          .catch(error => console.log(error));
      }, []);


    useEffect(() => {

        const searchedCountryName = data.filter(o => o.name.common == searchedWord)
        setShowData(searchedCountryName)

    }, [searchedWord])


    useEffect(() => {
        if (region.region !== 'Filte by Region') {
            
            const regionFilteredCountries = data.filter(o => o.region == region.region)
            setShowData(regionFilteredCountries)
        } else {
            setShowData(data)
        }
    },[data, region])

    // console.log(allData.alldata)
    // console.log(data)


    return(
        <div className="w-full h-full px-[14%]">
            <div className="w-full h-full flex flex-col items-center gap-10 py-5">
                {showData?.slice(0,20).map(o => <Country key={o.cca3} id={o.cca3} name={o.name.common}
                    flag = {o.flags.png} population = {o.population} region = {o.region} capital = {o.capital}/>)}
            </div>
        </div>
    )
}