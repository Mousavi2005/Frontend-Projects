import { useState } from "react"
import MobileBodyComponent from "./mobileBody"
import MobileBottomComponent from "./mobileBottom"


export default function DesktopRighttComponent(props) {
    // const [step, setStep] = useState(() => 2)
    console.log(props.step)
    const [validation, setvalidation] = useState(() => [])


    function addStep() {
        props.setStep(prev => prev + 1)
    }

    function minusStep() {
        props.setStep(prev => prev - 1)
    }

    function getValidation(array) {
        // console.log(array)
        setvalidation(array)

    }

    return (
        <div className="flex-[5]"> 
            <MobileBodyComponent val = {validation} step = {props.step} setStep = {props.setStep} isdesktop = {true}/>

            <div>
                <MobileBottomComponent passValidation = {getValidation} minus = {minusStep} add = {addStep} step = {props.step} />
            </div>
            {/* <MobileBottomComponent passValidation = {getValidation} minus = {minusStep} add = {addStep} step = {step} /> */}
        </div> 
    )
}