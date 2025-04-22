import React from "react";

export default function BorderCountry(props) {
    return (
        <div className="h-8 w-fit min-w-28 bg-white dark:bg-[#2b3945] dark:text-white flex justify-center items-center rounded-md shadow-custom-strong p-4">
            <p className="text-center">{props.name}</p>
        </div>
    )
}