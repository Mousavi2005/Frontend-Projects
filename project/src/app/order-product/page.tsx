"use client"
import { useRouter } from "next/navigation"
export default function Order() {
    const router = useRouter()

    function handleClick() {
        console.log('Clicked')
        router.push("/")
    }
    return (
    <>
        <h1>Ordering product</h1>
        <button onClick={handleClick}>Place order</button>
    </>)
}