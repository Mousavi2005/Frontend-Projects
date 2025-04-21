import React from "react";
// import { setSearchedWord } from "../REDUCERS/search";
import { setShowData } from "../REDUCERS/showData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Search () {

    const dispatch = useDispatch()
    const allData =useSelector(state => state.allData).alldata

    function handleSearch(formdata) {

        const searchedWord = formdata.get('search')
        const searchedCountryName = allData.filter(o => o.name.common == searchedWord)

        dispatch(setShowData(searchedCountryName))
    }

    return(
        <div className="w-full h-[15%] p-3 my-5 flex justify-center items-center ">

            <form action={handleSearch} className="w-[94%] h-[50%] flex items-center shadow-search-boxshadow rounded-md p-4 pl-8 gap-8 bg-white">
                <button type="submit" className="">
                    <img src="/Icons/magnifying.svg" alt="icon" className="h-5 opacity-50"></img>
                </button>
                <input type="text" name="search" placeholder="search for a country..." className="w-full h-[50%] focus:outline-none"/>
            </form>

        </div>
    )
}