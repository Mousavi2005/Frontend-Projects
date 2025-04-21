import React from "react";
import { useSelector } from "react-redux";
import BorderCountry from "./BorderCountries";
import { useNavigate } from "react-router-dom";
export default function CountryDetail() {
    const selectedCountryDetails = useSelector(state => state.isCountrySelected)
    const navigate = useNavigate();


    function handleBackButton() {
        console.log('hi')
        navigate('/')
    }
     
    return (
        <div className="w-full h-full bg-blue-200 flex justify-center">

            <div className="w-[84%] bg-slate-400 py-6">

                <div id="btn-holder" className="w-full h-20 flex items-center">
                    <button onClick={handleBackButton} className="w-36 h-10 bg-slate-200 rounded-md">Back</button>
                </div>

                <div id="detail-holder" className="w-full min-h-64 bg-purple-400">
                    <div id="img-holder" className="w-full h-60" style={{background: `url(${selectedCountryDetails.flag})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                </div>

                <div className="mt-8 mb-6">{selectedCountryDetails.name}</div>

                <section className="w-full flex flex-col gap-[6px] bg-red-300">
                    <span>Native Name: {selectedCountryDetails.nativeName}</span>
                    <span>Population: {selectedCountryDetails.population}</span>
                    <span>Region: {selectedCountryDetails.region}</span>
                    <span>Sub Region: {selectedCountryDetails.subRegion}</span>
                    <span>Capital: {selectedCountryDetails.capital}</span>
                </section>


                <section className="w-full flex flex-col gap-[6px] bg-yellow-200 mt-8">
                    <span>Top Level Domain: {selectedCountryDetails.topLevelDomain}</span>
                    <span>
                        Currencies: {selectedCountryDetails.currencies && Object.values(selectedCountryDetails.currencies).map(curr => curr.name).join(', ')}
                    </span>
                    <span>
                      Languages: {selectedCountryDetails.languages && Object.values(selectedCountryDetails.languages).join(', ')}

                    </span>
                </section>

                <div className="w-full flex flex-col gap-5">
                    <h2>Border Countries</h2>
                    <section className="flex justify-start flex-wrap gap-x-3 gap-y-2">
                        {selectedCountryDetails.borderCountries?.map(name => <BorderCountry name = {name} />)}
                    </section>
                </div>


            </div>
            
        </div>
    )
}