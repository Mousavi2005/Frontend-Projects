import React from "react"
import { useDispatch } from "react-redux"
import Country from "./Country"
import { useSelector } from "react-redux"
// import Country from "./Country"


export default function CountriesHolder() {

    const showData = useSelector(state => state.showData).data

    return(
        <div className="w-full h-full px-[10%] md:px-[3%] bg-[#f2f2f2] dark:bg-[#202c37]">
            <div className="w-full h-full flex flex-col items-center gap-12 md:gap-10 py-5 md:flex-row md:flex-wrap md:justify-center bg-[#f2f2f2] dark:bg-[#202c37]">
                {showData?.slice(0,20).map(o => <Country key={o.cca3} id={o.cca3} name={o.name.common}
                    flag = {o.flags.png} population = {o.population} region = {o.region} capital = {o.capital}/>)}
            </div>
        </div>
    )
}