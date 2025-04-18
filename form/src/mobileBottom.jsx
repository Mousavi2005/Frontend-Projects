import { useEffect, useState } from "react";

let validate = [{case1:true, case2:true}, {case1:true, case2:true}, {case1:true, case2:true}]
let userInformation = {name: '', email: '' , phoneNumber:''}


export default function mobileBottomComponent(props) {

    const [validation, setValidation] = useState(() => [])
    // let validat = [{case1:true, case2:true}, {case1:true, case2:true}, {case1:true, case2:true}]

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function isValidPhoneNumber(phone) {
        const regex = /^\+\d{1,3} \d{3} \d{3} \d{3}$/;
        return regex.test(phone);
    }

    function handleInfo() {
        // props.add()
        const name = document.querySelector('#nameInput').value
        const email = document.querySelector('#emailInput').value
        const phone = document.querySelector('#phoneInput').value

        if (name == '') {

            validate = validate.map((o, index) => index === 0 ? {case1:false, case2:false} :o)
        }

        else if (name.length < 4) {
            validate = validate.map((o, index) => index === 0 ? {case1:true, case2:false} :o)

        } 
        
        else {
            validate = validate.map((o, index) => index === 0 ? {case1:true, case2:true} :o)

        }


        if (email == '') {
            validate = validate.map((o, index) => index === 1 ? {case1:false, case2:false} :o)

        }

        else if (!isValidEmail(email)) {

            validate = validate.map((o, index) => index === 1 ? {case1:true, case2:false} :o)

        } else {

            validate = validate.map((o, index) => index === 1 ? {case1:true, case2:true} :o)
        }


        if (phone == '') {

            validate = validate.map((o, index) => index === 2 ? {case1:false, case2:false} :o)
        }

        else if(!isValidPhoneNumber(phone)) {

            validate = validate.map((o, index) => index === 2 ? {case1:true, case2:false} :o)
        } else {

            validate = validate.map((o, index) => index === 2 ? {case1:true, case2:true} :o)
        }

        setValidation(validate)
    }

    useEffect(() => {

        if (validation[0] !== undefined && (validation[0].case1) && (validation[0].case2) && (validation[1].case1) && (validation[1].case2) && (validation[2].case1) && (validation[2].case2)){

            const name = document.querySelector('#nameInput').value
            const email = document.querySelector('#emailInput').value
            const phone = document.querySelector('#phoneInput').value

            userInformation.name = name
            userInformation.email = email
            userInformation.phoneNumber = phone

            props.add()
        } 
        
        else {

            props.passValidation(validation);
        }
    }, [validation]);
    

    console.log(userInformation)


    return (
        <>

            {props.step == 1 && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-end items-center px-3">
                <button onClick={handleInfo} className="w-[120px] h-[50px] bg-[#022959] text-white rounded text-lg hover:bg-[#adbeff]">Next Step</button>
            </div>

            </div>)}


            {(props.step == 2 || props.step == 3 || props.step == 4) && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-between items-center px-3">
                <button onClick={props.minus} className="hover:text-[#022959] text-[#9699ab] font-bold">Go Back</button>
                <button onClick={props.add} className="w-[120px] h-[50px] bg-[#022959] text-white rounded text-lg hover:bg-[#adbeff]">{props.step == 4 ? 'Confirm' : 'Next Step'}</button>
            </div>

            </div>)}           
        
        </>

    )
}