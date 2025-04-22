import React from "react";
import Search from "./Search";
import SelectOption from "./SelectOption";

export default function DesktopSearch() {
    return(


            <div className="w-full mb-14 mt-8 md:mt-0 md:mb-6 h-32 bg-[#f2f2f2] dark:bg-[#202c37] md:flex md:items-center md:justify-between">
                <div className="w-[96%] md:w-[46%] h-20 md:h-32 flex items-center dark:bg-[#202c37]">
                    <Search />
                </div>
                <div className="h-12 mt-8 md:mt-0 md:h-full flex items-center pt-4 pr-3 dark:bg-[#202c37]">
                    <SelectOption />
                </div>
                {/* <SelectOption /> */}
            </div>

    )
}