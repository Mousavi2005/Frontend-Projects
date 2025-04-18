import { useState } from "react"
import DesktopLeftComponent from "./desktopLeft"
import DesktopRighttComponent from "./desktoprRght"

export default function DesktopDesignComponent() {
    const [step, setStep] = useState(() => 2)
    // const [a,b] = useState

    return(
        <div className="w-[80%] max-w-4xl h-[80%] bg-white flex rounded-xl">
            <DesktopLeftComponent step = {step} />
            <DesktopRighttComponent step = {step} setStep = {setStep} />

        </div>
    )
}