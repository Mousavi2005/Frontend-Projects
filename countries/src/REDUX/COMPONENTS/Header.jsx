import React from "react"

export default function Header() {
    return(
        <div className="w-full h-20 bg-white flex items-center justify-between p-5">
            <span className="font-bold text-lg">Where in the world?</span>
            <div className="flex items-center gap-2">
                <button>
                    <img src="/Icons/moon.svg" alt="moon" className="w-5"/>
                </button>
                <span>Dark Mode</span>
            </div>
        </div>
    )
}