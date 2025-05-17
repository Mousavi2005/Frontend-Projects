"use client"

import { usePathname } from "next/navigation"

export default function Photot() {
    const pathName = usePathname()
    const lastSegment = pathName.split('/').pop(); // "123"

    // console.log(lastSegment)
    return(
        <div style={{width: '400px', height: '250px'}}>
            <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`../../../images/${lastSegment}.webp`} alt="wonders N1" />
        </div> 
    )
}