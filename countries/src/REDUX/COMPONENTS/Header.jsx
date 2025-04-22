import React from "react"

export default function Header() {

    function toggleLightDark() {
        // document.documentElement.classList.toggle('dark')
        document.documentElement.classList.toggle('dark');

        console.log(document.documentElement.classList)
    }
    return(

        <div className="w-full h-20 bg-white dark:bg-[#2b3945] flex items-center justify-between p-5">

            <span className="font-bold text-lg dark:text-white">Where in the world?</span>
            <div className="flex items-start gap-2">
                <button onClick={toggleLightDark}>
                    <img src="/Icons/moon.svg" alt="moon" className="w-5 dark:hidden"/>
                    <img src="/Icons/moon-dark.svg" alt="moon" className="w-5 hidden dark:block"/>
                </button>
                <span className="dark:text-white">Dark Mode</span>
            </div>

        </div>
    )
}