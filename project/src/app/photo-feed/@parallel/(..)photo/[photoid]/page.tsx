'use client'

import { usePathname } from "next/navigation"

export default function Interception() {
    const pathName = usePathname()
    const lastSegment = pathName.split('/').pop()
    // console.log(lastSegment)
    
    return (
        <div style={{width: '100%', height: '1750px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: 'hsla(0, 0%, 0%, 0.85)'}}>
            <div style={{width: '400px', height: '250px', opacity: '0.8'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`../../../images/${lastSegment}.webp`} alt="wonders N1" />
            </div> 
        </div>
        // <div style={{width: '400px', height: '250px', opacity: '0.8'}}>
        //     <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`../../../images/${lastSegment}.webp`} alt="wonders N1" />
        // </div> 
    )
}