import MobileHeadComponent from "./mobilehead"
import MobileBodyComponent from "./mobileBody"
import MobileBottomComponent from "./mobileBottom"
import { useState } from "react"

// let plan = ''

export default function mobileDesign() {
    const [validation, setvalidation] = useState(() => [])
    const [plan, setPlan] = useState(() => '')

    const [step, setStep] = useState(() => 2)

    function addStep() {
        if(step == 2 && plan == ''){
            alert('Please select a plan')

        }
        else {
        setStep(prev => prev + 1)

        }
        // setStep(prev => prev + 1)
    }

    function minusStep() {
        setStep(prev => prev - 1)
    }

    function getValidation(array) {
        // console.log(array)
        setvalidation(array)

    }
    console.log(plan)
    console.log("///////////")

    return (
        <div className="w-full h-full flex flex-col items-center">

            <div className=" absolute z-0 w-full h-[25%] bg-[url('../public/assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-center bg-cover"></div>
        
            <div className="z-[1] flex xs:w-[60%] sm:w-[50%] max-w-lg h-fit justify-around my-10">
                <MobileHeadComponent step = {step} />

            </div>

            <div className="z-[1] flex xs:w-[80%] justify-center sm:w-[70%] max-w-lg h-fit mb-20">

                <MobileBodyComponent plan = {plan} setPlan = {setPlan} val = {validation} step = {step} setStep = {setStep} isdesktop = {false}/>

            </div>
 
            <MobileBottomComponent plan = {plan} passValidation = {getValidation} minus = {minusStep} add = {addStep} step = {step} />


        </div>
    )
}