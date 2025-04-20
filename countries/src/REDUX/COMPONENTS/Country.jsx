import React from "react";

export default function Country(props) {
    // console.log(props.flag)


    return(
        <div className="w-[94%] h-[450px] bg-white rounded-md shadow-custom-strong">

            <div className={`w-full h-[45%] rounded-md`} style={{background: `url(${props.flag})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>

            <div id="country-info" className="flex flex-col items-start gap-2 w-full pl-6 pb-8">
                <p className="font-bold text-2xl mt-10 mb-4">{props.name}</p>
                <span>Population: {props.population}</span>
                <span>Region: {props.region}</span>
                <span>Capital: {props.capital}</span>

            </div>

        </div>
    )
}