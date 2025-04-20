import React, { use, useEffect, useState } from "react"
import Country from "./Country"
import { useSelector } from "react-redux"

export default function CountriesHolder() {
    const [data, setData] = useState(() => [])
    const [showData, setShowData] = useState(() => [])
    const region = useSelector(state => state.region)
    const searchedWord = useSelector(state => state.search.searchedWord)


    useEffect(() => {     
        fetch('https://restcountries.com/v3.1/all')
        .then(data => data.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    }
    ,[])


    useEffect(() => {

        const searchedCountryName = data.filter(o => o.name.common == searchedWord)
        setShowData(searchedCountryName)

    }, [searchedWord])


    useEffect(() => {
        if (region.region !== 'Filte by Region') {
            
            const regionFilteredCountries = data.filter(o => o.region == region.region)
            setShowData(regionFilteredCountries)
            // console.log('|||||||||||||||||')
        } else {
            setShowData(data)
            // console.log('|||||||||||||||||')
            // console.log(data)
        }
    },[data, region])

    // useEffect(() => {

    //     const searchedCountryName = data.filter(o => o.name.common == searchedWord)
    //     setShowData(searchedCountryName)

    // }, [searchedWord])

    



    return(
        <div className="w-full h-full px-[14%]">
            <div className="w-full h-full flex flex-col items-center gap-10 py-5">
                {showData?.slice(0,20).map(o => <Country key={o.cca3} name={o.name.common}
                    flag = {o.flags.png} population = {o.population} region = {o.region} capital = {o.capital}/>)}
            </div>
        </div>
    )
}