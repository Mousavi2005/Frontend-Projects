import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setClickedToTrue, setClickedToFalse } from "../countryClicked";
import { useNavigate } from "react-router-dom";

export default function Country(props) {

    const isACountryClicked = useSelector(state => state.isCountrySelected)
    const allData = useSelector(state => state.allData).alldata
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // console.log("Country called")
    function handleDetail(id) {
        const selecteCountryInfo = allData.filter(item => item.cca3 == id)[0]
        // console.log(selecteCountryInfo)
        // console.log("}}}}")

        dispatch(setClickedToTrue({
            id: selecteCountryInfo.cca3,
            flag: selecteCountryInfo.flags.png,
            name: selecteCountryInfo.name.common,
            nativeName: selecteCountryInfo.name.official,
            population: selecteCountryInfo.population,
            region: selecteCountryInfo.region,
            subRegion: selecteCountryInfo.subregion,
            capital: selecteCountryInfo.capital[0],
            topLevelDomain: selecteCountryInfo.tld[0],
            currencies: selecteCountryInfo.currencies,
            languages: selecteCountryInfo.languages,
            borderCountries: selecteCountryInfo.borders
        }))

        navigate('/detail')
    }


    return(
        <div onClick={() => handleDetail(props.id)} className="w-[94%] max-w-[350px] md:w-[22%] md:max-w-72 md:min-w-60 h-[450px] bg-white dark:bg-[#2b3945] dark:text-white rounded-md shadow-custom-strong hover:cursor-pointer overflow-hidden">

            <div className={`w-full h-[45%]`} style={{background: `url(${props.flag})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>

            <div id="country-info" className="flex flex-col items-start gap-2 w-full pl-6 pb-8">
                <p className="font-bold text-2xl mt-10 mb-4">{props.name}</p>
                <span className="font-bold text-sm">Population: <span className="font-normal">{props.population}</span></span>
                <span className="font-bold">Region: <span className="font-normal">{props.region}</span></span>
                <span className="font-bold">Capital: <span className="font-normal">{props.capital}</span></span>

            </div>

        </div>
    )
}