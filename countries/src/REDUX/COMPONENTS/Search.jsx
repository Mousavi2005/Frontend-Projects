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
        <div className="w-full md:h-32 p-3 my-5 flex justify-center items-center ">

            <form action={handleSearch} className="w-[94%] h-[50%] flex items-center shadow-search-boxshadow rounded-md p-4 pl-8 md:p-2 md:pl-6 gap-8 bg-white dark:bg-[#2b3945]">
                <button type="submit" className="">
                    <img src="/Icons/magnifying.svg" alt="icon" className="h-5 opacity-50 dark:hidden"></img>
                    <img src="/Icons/magnifying-darkmode.svg" alt="icon" className="h-5 opacity-50 hidden dark:block"></img>
                </button>
                <input type="text" name="search" placeholder="search for a country..." className="w-full h-[50%] md:h-full focus:outline-none dark:bg-[#2b3945] dark:placeholder-white dark:text-white"/>
            </form>

        </div>
    )
}