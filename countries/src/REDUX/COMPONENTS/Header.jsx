import React from "react"

export default function Header() {
    return(
        <div className="w-full h-20 bg-white flex items-center justify-between p-5">
            <span className="font-bold text-xl">Where in the world?</span>
            <div>
                <button>icon</button>
                <span>Dark Mode</span>
            </div>
        </div>
    )
}