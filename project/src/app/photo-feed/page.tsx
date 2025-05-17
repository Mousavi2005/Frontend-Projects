'use client'
import { useRouter } from "next/navigation"

export default function Photot() {
    const router = useRouter()
    function handleClick(imgId: number) {
        // console.log(imgId)
        router.push(`/photo/${imgId}`)
        // console.log(imgId)


    }
    return(
        <>
            <div onClick={() => handleClick(1)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/1.webp" alt="wonders N1" />
            </div>            
            <div onClick={() => handleClick(2)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/2.webp" alt="wonders N2" />
            </div>
            <div onClick={() => handleClick(3)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/3.webp" alt="wonders N3" />
            </div>
            <div onClick={() => handleClick(4)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/4.webp" alt="wonders N4" />
            </div>
            <div onClick={() => handleClick(5)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/5.webp" alt="wonders N5" />
            </div>
            <div onClick={() => handleClick(6)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/6.webp" alt="wonders N6" />
            </div>
            <div onClick={() => handleClick(7)} style={{width: '400px', height: '250px'}}>
                <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src="../../../images/7.webp" alt="wonders N7" />
            </div>
        </>
    )
}