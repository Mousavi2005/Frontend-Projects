import MobileHeadComponent from "./mobilehead"
import MobileBodyComponent from "./mobileBody"
import MobileBottomComponent from "./mobileBottom"
import { useState } from "react"

export default function mobileDesign() {
    const [validation, setvalidation] = useState(() => [])

    const [step, setStep] = useState(() => 1)

    function addStep() {
        setStep(prev => prev + 1)
    }

    function minusStep() {
        setStep(prev => prev - 1)
    }

    function getValidation(array) {
        // console.log(array)
        setvalidation(array)

    }

    return (
        <div className="w-full h-full flex flex-col items-center">

            <div className=" absolute z-0 w-full h-[20%] bg-[url('../public/assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-center bg-cover"></div>
        
            <MobileHeadComponent step = {step} />

            <MobileBodyComponent val = {validation} step = {step} setStep = {setStep}/>

            <MobileBottomComponent passValidation = {getValidation} minus = {minusStep} add = {addStep} step = {step} />


        </div>
    )
}