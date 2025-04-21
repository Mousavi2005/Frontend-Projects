import React from "react";
import Search from "./Search";
import SelectOption from "./SelectOption";

export default function DesktopSearch() {
    return(


            <div className="w-full h-32 bg-[#f2f2f2] flex items-center justify-between">
                <div className="w-[46%] h-32 flex items-center">
                    <Search />
                </div>
                <div className="h-full flex items-center pt-4 pr-3">
                    <SelectOption />
                </div>
                {/* <SelectOption /> */}
            </div>

    )
}