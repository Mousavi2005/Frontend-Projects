import React from "react";
import { setSearchedWord } from "../REDUCERS/search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { setSearchedWord } from "../REDUCERS/search";

export default function Search () {

    const dispatch = useDispatch()
    const searchedW = useSelector(state => state.search)
    // console.log(searchedW.searchedWord)

    function handleSearch(formdata) {

        // console.log(formdata.get('search'))
        const searchedWord = formdata.get('search')
        dispatch(setSearchedWord({word: searchedWord}))

    }

    return(
        <div className="w-full h-[15%] p-3 my-5 flex justify-center items-center ">

            <form action={handleSearch} className="w-[94%] h-[50%] flex items-center shadow-search-boxshadow rounded-md p-4 gap-8 bg-white">
                <button type="submit" className="">
                    <img src="/Icons/magnifying.svg" alt="icon" className="h-5 opacity-50"></img>
                </button>
                <input type="text" name="search" placeholder="search" className="w-full h-[50%] focus:outline-none"/>
            </form>

        </div>
    )
}