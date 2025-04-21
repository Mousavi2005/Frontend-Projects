import React from "react";
import Header from "./Header";
import DesktopSearch from "./DesktopSearch";
import CountriesHolder from "./CountriesHolder";
import { useEffect } from "react";
import { setAllData } from "../REDUCERS/allData";
import { setShowData } from "../REDUCERS/showData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function DesktopDesign() {

    const allData = useSelector(state => state.allData).alldata
    const dispatch = useDispatch()

    useEffect(() => {     
              fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(data => {
                  dispatch(setAllData(data));   // Redux dispatch with payload
                })
                .catch(error => console.log(error));
              }, []);
          
          
    useEffect(() => {
        
            dispatch(setShowData(allData))
          }, [allData])

    // console.log(allData)

    return(
        <>

        <Header />
        {/* <div className="min-h-screen"> */}
        <DesktopSearch />
        {/* </div> */}
 
        <CountriesHolder />



        


        </>
    )
}