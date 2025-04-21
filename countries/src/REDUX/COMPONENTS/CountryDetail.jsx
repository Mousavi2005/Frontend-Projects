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
        <div className="w-full h-full bg-[#f2f2f2] flex justify-center">

            <div className="w-[84%] bg-[#f2f2f2] py-6 mb-20">

                <div id="btn-holder" className="w-full h-20 flex items-center">
                    <button onClick={handleBackButton} className="w-36 h-10 bg-white rounded-md flex items-center justify-start gap-6 pl-5">
                        <img src="/Icons/arrow-left.svg" alt="arrow" className="w-6"/>
                        <span className="text-lg">Back</span>
                    </button>
                </div>

                <div id="detail-holder" className="w-full min-h-64 bg-[#f2f2f2]">
                    <div id="img" className="w-full h-60" style={{background: `url(${selectedCountryDetails.flag})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

                    <div className="mt-8 mb-6 text-2xl font-bold">{selectedCountryDetails.name}</div>

                    <section className="w-full flex flex-col gap-[14px]">
                        <span className="font-semibold">Native Name: <span className="font-normal">{selectedCountryDetails.nativeName}</span></span>
                        <span className="font-semibold">Population: <span className="font-normal">{selectedCountryDetails.population}</span></span>
                        <span className="font-semibold">Region: <span className="font-normal">{selectedCountryDetails.region}</span></span>
                        <span className="font-semibold">Sub Region: <span className="font-normal">{selectedCountryDetails.subRegion}</span></span>
                        <span className="font-semibold">Capital: <span className="font-normal">{selectedCountryDetails.capital}</span></span>
                    </section>

                    <section className="w-full flex flex-col gap-[14px] mt-12">
                        <span className="font-semibold">Top Level Domain: <span className="font-normal">{selectedCountryDetails.topLevelDomain} </span></span>
                        <span className="font-semibold">
                            currencies: <span className="font-normal">{selectedCountryDetails.currencies && Object.values(selectedCountryDetails.currencies).map(curr => curr.name).join(', ')}</span>
                        </span>
                        <span className="font-semibold">
                        Languages: <span className="font-normal">{selectedCountryDetails.languages && Object.values(selectedCountryDetails.languages).join(', ')}</span>

                        </span>
                    </section>

                    <div className="w-full flex flex-col gap-5 mt-12">
                        <h2 className="font-semibold text-xl">Border Countries:</h2>
                        <section className="flex justify-start flex-wrap gap-x-3 gap-y-2">
                            {selectedCountryDetails.borderCountries?.map(name => <BorderCountry name = {name} />)}
                        </section>
                    </div>
                </div>


            </div>
            
        </div>
    )
}