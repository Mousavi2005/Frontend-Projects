import React from "react";
import { useSelector } from "react-redux";
import BorderCountry from "./BorderCountries";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


export default function CountryDetail() {

    const selectedCountryDetails = useSelector(state => state.isCountrySelected)
    const navigate = useNavigate();


    function handleBackButton() {
        navigate('/')
    }

    // console.log(selectedCountryDetails.flag)
     
    return (
        <div className="w-full h-full bg-[#f2f2f2] flex flex-col items-center dark:bg-[#202c37]">

            <Header />

            <div className="w-[84%] bg-[#f2f2f2] dark:bg-[#202c37] py-6 pb-20 flex flex-col items-center">

                <div id="btn-holder" className="w-full h-20 mb-8 flex items-center dark:bg-[#202c37]">
                    <button onClick={handleBackButton} className="w-[35%] max-w-40 h-10 bg-white dark:bg-[#2b3945] dark:text-white rounded-md flex items-center justify-start gap-6 pl-5">
                        <img src="/Icons/arrow-left.svg" alt="arrow" className="w-6 dark:hidden"/>
                        <img src="/Icons/arrow-left-darkmode.svg" alt="arrow" className="w-6 hidden dark:block"/>
                        <span className="text-lg">Back</span>
                    </button>
                </div>

                <div id="detail-holder" className="w-full max-w-[420px] min-h-64 md:min-h-[250px] bg-[#f2f2f2] dark:bg-[#202c37] md:flex md:items-start md:max-w-full md:gap-10 md:min-w-[750px]">
                {/* md:w-[500px] md:h-full md:max-h-[250px]" */}
                    <div id="img" className="w-full h-60 md:max-w-[400px] md:h-70" style={{background: `url(${selectedCountryDetails.flag})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

                    <div id="info" className="w-full">

                        <div className="mb-6 md:mb-2 text-2xl font-bold dark:text-white">{selectedCountryDetails.name}</div>

                        <div className="md:flex md:items-start">
                            {/* <div className="mt-8 mb-6 md:mb-2 text-2xl font-bold">{selectedCountryDetails.name}</div> */}

                            <section className="w-full flex flex-col gap-[14px] md:gap-[10px]">
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Native Name: <span className="font-normal">{selectedCountryDetails.nativeName}</span></span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Population: <span className="font-normal">{selectedCountryDetails.population}</span></span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Region: <span className="font-normal">{selectedCountryDetails.region}</span></span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Sub Region: <span className="font-normal">{selectedCountryDetails.subRegion}</span></span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Capital: <span className="font-normal">{selectedCountryDetails.capital}</span></span>
                            </section>

                            <section className="w-full flex flex-col gap-[14px] md:gap-[10] mt-12 md:mt-0">
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">Top Level Domain: <span className="font-normal">{selectedCountryDetails.topLevelDomain} </span></span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">
                                    currencies: <span className="font-semibold">{selectedCountryDetails.currencies && Object.values(selectedCountryDetails.currencies).map(curr => curr.name).join(', ')}</span>
                                </span>
                                <span className="font-semibold md:text-sm md:font-semibold dark:text-white">
                                Languages: <span className="font-normal">{selectedCountryDetails.languages && Object.values(selectedCountryDetails.languages).join(', ')}</span>

                                </span>
                            </section>
                        </div>

                        <div className="w-full flex flex-col gap-5 mt-12 md:mt-4">
                            <h2 className="font-semibold text-xl dark:text-white">Border Countries:</h2>
                            <section className="flex justify-start flex-wrap gap-x-3 gap-y-2">
                                {selectedCountryDetails.borderCountries?.map(name => <BorderCountry name = {name} />)}
                            </section>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
    )
}