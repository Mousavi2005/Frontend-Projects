import { useEffect, useState } from "react"

// let plan = ''
let planPrice = 0
// let tottalPrice = 0
// let selectedAddOns = []

const plans = ['Arcade', 'Advanced', 'Pro']
const addOns = ['Online service', 'Larger storage', 'Customizable profile']


export default function MobileBodyComponent(props) {

    const [monthOrYear, setMonthOrYear] = useState(() => 'M')
    const [activeBtn, setActiveBtn] = useState(() => [false, false, false])
    const [selectedAddOns, setSelectedAddOns] = useState(() => [])
    const [tottalPrice, setTottalPrice] = useState(0)
    const [v, setv] = useState([])

    function setMonthly() {
        
        setMonthOrYear('M')
    }

    function setYearly() {
        setMonthOrYear('Y')
    }

    function selectPlan(Index) {

        setActiveBtn(prev => prev.map((i, index) => index == Index ? true : false))
        // props.plan = plans[Index]
        props.setPlan(plans[Index])
    }
    // console.log(selected)

    function selectAddOns(event) {

        if (event.target.checked) {

            if (event.target.name == 'O') {
                // selectedAddOns.push('Online service')
                setSelectedAddOns(prev => [...prev, 'Online service'])
                // console.log(selectedAddOns)

            } else if(event.target.name == 'L') {
                // selectedAddOns.push('Larger storage')
                setSelectedAddOns(prev => [...prev, 'Larger storage'])

                // console.log(selectedAddOns)

            } else {
                // selectedAddOns.push('Customizable profile')
                setSelectedAddOns(prev => [...prev, 'Customizable profile'])

                // console.log(selectedAddOns)
            }
            
        } else {
            if (event.target.name == 'O') {
                // selectedAddOns = selectedAddOns.filter(item => item !== 'Online service')
                setSelectedAddOns(prev => prev.filter(item => item !== 'Online service'))
                // console.log(selectedAddOns)
                
            } else if(event.target.name == 'L') {
                // selectedAddOns = selectedAddOns.filter(item => item !== 'Larger storage')
                setSelectedAddOns(prev => prev.filter(item => item !== 'Larger storage'))

                // console.log(selectedAddOns)

            } else {
                // selectedAddOns = selectedAddOns.filter(item => item !== 'Customizable profile')
                setSelectedAddOns(prev => prev.filter(item => item !== 'Customizable profile'))

                // console.log(selectedAddOns)

            }
        }

    }

    function calculateTottalPrice() {
        
        let tottalPrice = 0

        if (monthOrYear == 'M') {

            if (props.plan == 'Arcade') {
                tottalPrice += 9

            } else if(props.plan == 'Advanced') {
                tottalPrice += 12

            } else {
                tottalPrice += 15

            }

            if (selectedAddOns.includes('Online service')) {
                tottalPrice += 1


            }
            if (selectedAddOns.includes('Larger storage')) {
                tottalPrice += 2

                
            }
            if (selectedAddOns.includes('Customizable profile')) {
                tottalPrice += 2

            }
            
        } else {
            
            if (props.plan == 'Arcade') {
                tottalPrice += 90

            } else if(props.plan == 'Advanced'){
                tottalPrice += 120

            } else {
                tottalPrice += 150

            }

            if (selectedAddOns.includes('Online service')) {
                tottalPrice += 10

            }if (selectedAddOns.includes('Larger storage')) {
                tottalPrice += 20

                
            }if (selectedAddOns.includes('Customizable profile')) {
                tottalPrice += 20

            }
        }
        return tottalPrice

    }


    function calculatePlanPrice() {

        if (monthOrYear == 'M') {
            
            if (props.plan == 'Arcade') {
                return 9
            } else if (props.plan == 'Advanced') {
                return 12
            } else if (props.plan == 'Pro') {
                return 15
            }
        }
        else if (monthOrYear == 'Y') {
            
            if (props.plan == 'Arcade') {
                return 90
            } else if (props.plan == 'Advanced') {
                return 120
            } else if (props.plan == 'Pro') {
                return 150
            }
        }

    }

    useEffect(() => {
        planPrice = calculatePlanPrice()
    } , [props.plan, monthOrYear])




    useEffect(() => {
        if (props.step === 4) {
          setTottalPrice(calculateTottalPrice());
        }
      }, [props.step]); 
      

    useEffect(() => {
        setv(props.val)
    }, [props.val])

    return (
        <>
          {props.step === 1 && (
            <div className="z-[1] w-[94%] bg-white rounded-xl px-5 py-8">
              <h2 className="text-3xl text-[#022959] font-bold">Personal Info</h2>
              <p className="text-xl text-[#9699ab] mt-2">
                Please provide your name, email address and phone number
              </p>
      
              <form className="flex flex-col w-full mt-4">
                <label className="my-1">
                    <div className="w-full flex justify-between">
                        <span className="text-[#022959]">Name</span>
                        <span className="text-sm text-[#ed3548]">{ (v[0] !== undefined && v[0].case1 === false)? "This field is required" : (v[0] !== undefined && v[0].case2 === false) ? 'At least 4 charachters' : '' }</span>
                    </div>
                  <input
                    id="nameInput"
                    type="text"
                    name="name"
                    className={`focus:outline-none rounded-lg placeholder-[#9699ab] w-full p-2 border-2 ${ ((v[0] === undefined) || ( (v[0].case1 === true) && (v[0].case2 === true)) ) ? 'border-[#d6d9e6] rounded' : 'border-[#ed3548]' }`}
                    placeholder="e.g. Stephen King"
                  />
                </label>
      
                <label className="my-1">
                    <div className="w-full flex justify-between">
                        <span className="text-[#022959]">Email</span>
                        <span className="text-sm text-[#ed3548]">{ (v[1] !== undefined && v[1].case1 === false)? "This field is required" : (v[1] !== undefined && v[1].case2 === false) ? 'Enter valid email' : '' }</span>
                    </div>
                  <input
                    id="emailInput"

                    type="text"
                    name="email"
                    className={`focus:outline-none rounded-lg placeholder-[#9699ab] w-full p-2 border-2 ${ ((v[1] === undefined) || ( (v[1].case1 === true) && (v[1].case2 === true)) ) ? 'border-[#d6d9e6] rounded' : 'border-[#ed3548]' }`}
                    placeholder="e.g. stephenking@lorem.com"
                  />
                </label>
      
                <label className="my-1">
                <   div className="w-full flex justify-between">
                        <span className="text-[#022959]">Phone number</span>
                        <span className="text-sm text-[#ed3548]">{ (v[2] !== undefined && v[2].case1 === false)? "This field is required" : (v[0] !== undefined && v[0].case2 === false) ? 'Enter valid phone number' : '' }</span>
                    </div>
                  <input
                    id="phoneInput"

                    type="text"
                    name="phone"
                    className={`focus:outline-none rounded-lg placeholder-[#9699ab] w-full p-2 border-2 ${ ((v[2] === undefined) || ( (v[2].case1 === true) && (v[2].case2 === true)) ) ? 'border-[#d6d9e6] rounded' : 'border-[#ed3548]' }`}
                    placeholder="e.g. +1 234 567 890"
                  />
                </label>
              </form>
              
            </div>
          )}

          {props.step === 2 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-8 flex flex-col">

                <h2 className="text-3xl text-[#022959] font-bold">Select your plan</h2>
                <p className={`text-xl ${props.isdesktop ? 'max-w-[90%] mb-10' : 'max-w-[80%]'} text-gray-400 mt-2`}>
                You have the option of monthly or yearly billing
                </p>

                <div className={`w-full flex items-center ${props.isdesktop ? 'flex-row gap-2' : 'flex-col'}`}>


                    <button onClick={() => selectPlan(0)} 
                            className={`${props.isdesktop ? 'flex-1 h-36 pt-2' : 'w-full h-20 pl-2'} border-2 flex ${props.isdesktop ? 'flex-col items-center' : 'flex-row justify-start'} gap-7 rounded-lg my-2 hover:border-blue-700 ${activeBtn[0] ? 'border-blue-700' : 'border-[#9699ab]'}`}>
                        <img src="../public/assets/images/icon-arcade.svg" alt="arcade-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center items-start">
                            <span className="text-lg text-[#022959]">Arcade</span>
                            <span className="text-sm text-[#9699ab]">${monthOrYear === 'M' ? 9 : 90}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>

                    <button onClick={() => selectPlan(1)} 
                            className={`${props.isdesktop ? 'flex-1 h-36 pt-2' : 'w-full h-20 pl-2'} border-2 flex ${props.isdesktop ? 'flex-col items-center' : 'flex-row justify-start'} gap-7 rounded-lg my-2 hover:border-blue-700 ${activeBtn[1] ? 'border-blue-700' : 'border-[#9699ab]'}`}>
                        <img src="../public/assets/images/icon-advanced.svg" alt="advanced-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center items-start">
                            <span className="text-lg w-fit text-[#022959]">Advanced</span>
                            <span className="text-sm text-[#9699ab]">${monthOrYear === 'M' ? 12 : 120}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>

                    <button onClick={() => selectPlan(2)} 
                            className={`${props.isdesktop ? 'flex-1 h-36 pt-2' : 'w-full h-20 pl-2'} border-2 flex ${props.isdesktop ? 'flex-col items-center' : 'flex-row justify-start'} gap-7 rounded-lg my-2 hover:border-blue-700 ${activeBtn[2] ? 'border-blue-700' : 'border-[#9699ab]'}`}>
                        <img src="../public/assets/images/icon-pro.svg" alt="pro-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center items-start">
                            <span className="text-lg text-[#022959]">Pro</span>
                            <span className="text-sm text-[#9699ab]">${monthOrYear === 'M' ? 15 : 150}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>   
                    
                </div>


                <div className="w-full flex items-center justify-between">
                        <form action='' className="flex w-full justify-between">

                            <label class={`font-bold cursor-pointer flex gap-1 ${monthOrYear == 'M' ? 'text-[#022959]' : 'text-[#9699ab]'}`}>
                                Monthly
                                <input type="radio" name="hi" onChange={setMonthly} checked = {monthOrYear == 'M'} />
                            </label>

                            <label class={`font-bold cursor-pointer flex gap-1 ${monthOrYear == 'Y' ? 'text-[#022959]' : 'text-[#9699ab]'}`}>
                                <input type="radio" name="hi" onChange={setYearly} checked = {monthOrYear == 'Y'} />
                                Yearly
                            </label>

                        </form>
                </div>
                           
            </div>)}


            {props.step === 3 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-8 flex flex-col ">

                <h2 className="text-3xl text-[#022959] font-bold">Pick add-ons</h2>
                <p className="text-xl max-w-[80%] text-gray-400 mt-2">
                Add-ons help inhance your gaming experience
                </p>

                <div className="w-full flex flex-col items-center">

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 ${selectedAddOns.includes('Online service') ? 'border-blue-700' : 'border-[#9699ab]' }`}>
                        <input type="checkbox" name="O" className="w-7 mr-5" onChange={selectAddOns} checked = {selectedAddOns.includes('Online service')} />                     
                        <div className="flex flex-col justify-center">
                            <span className="text-lg text-[#022959]">Online service</span>
                            <p className="text-sm text-[#9699ab]">Access to multipllayer games</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 1 : 10}/mo</span>
                    </div>

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 ${selectedAddOns.includes('Larger storage') ? 'border-blue-700' : 'border-[#9699ab]' }`}>
                        <input type="checkbox" name="L" className="w-7 mr-5" onChange={selectAddOns} checked = {selectedAddOns.includes('Larger storage')}/>
                        {/* onChange={() => setSelected(prev => prev.map((o, index) => index == 1 ? !o : o))} */}
                        <div className="flex flex-col justify-center">
                            <span className="text-lg text-[#022959]">Larger storage</span>
                            <p className="text-sm text-[#9699ab]">Extra 1TB of cliud service</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 2 : 20}/mo</span>
                    </div>

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 ${selectedAddOns.includes('Customizable profile') ? 'border-blue-700' : 'border-[#9699ab]' }`}>
                        <input type="checkbox" name="C" className="w-7 mr-5" onChange={selectAddOns}  checked = {selectedAddOns.includes('Customizable profile')}/>
                        <div className="flex flex-col justify-center">
                            <span className="text-lg text-[#022959]">Customizable profile</span>
                            <p className="text-sm text-[#9699ab]"> Custom theme on your profile</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 2 : 20}/mo</span>

                    </div>
 
                </div>
                        
            </div>)}


            {props.step === 4 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-8 flex flex-col ">

                <h2 className="text-3xl text-[#022959] font-bold">Finishing up</h2>
                <p className="text-xl max-w-full text-gray-400 mt-2">
                Double-check everything looks OK before confirming
                </p>

                <div className="w-full flex flex-col items-center mt-10">

                    {/* PLAN */}

                    <div className="w-[90%] flex justify-between items-center my-3 border-b border-black pb-4">
                        <div className="flex flex-col">
                            <span className="text-lg text-[#022959]">{props.plan}</span>
                            <button onClick={() => props.setStep(2)} className="text-[#9699ab] underline decoration-2 hover:text-[#473dff]">Change</button>
                        </div>

                        <span className="text-[#022959] font-bold">${planPrice}/{monthOrYear == 'M' ? 'mo' : 'yr'}</span>
                    </div>

                    {/* ADD ONS */}

                    <div className="w-[90%]">

                        <div className={`${selectedAddOns.includes('Online service') ? 'block' : 'hidden'} h-8 flex items-center justify-between`}>
                            <span className="text-[#9699ab]">Online service</span>
                            <span className="text-[#022959] font-bold">{monthOrYear === 'M' ? '+$1/mo' : '+$10/yr'}</span>
                        </div>

                        <div className={`${selectedAddOns.includes('Larger storage') ? 'block' : 'hidden'} h-8 flex items-center justify-between`}>
                            <span className="text-[#9699ab]">Larger storage</span>
                            <span className="text-[#022959] font-bold">{monthOrYear === 'M' ? '+$2/mo' : '+$20/yr'}</span>

                        </div>

                        <div className={`${selectedAddOns.includes('Customizable profile') ? 'block' : 'hidden'} h-8 flex items-center justify-between`}>
                            <span className="text-[#9699ab]">Customizable profile</span>
                            <span className="text-[#022959] font-bold">{monthOrYear === 'M' ? '+$2/mo' : '+$20/yr'}</span>

                        </div>
                    </div>

                    {/* TOTTAL */}

                    <div className="w-[90%] flex justify-between mt-8">
                        <span>Tottal (per {monthOrYear == 'M' ? 'month' : 'year'})</span>
                        <span className="text-[#473dff] font-bold">${tottalPrice}/{monthOrYear == 'M' ? 'mo' : 'yr'}</span>
                    </div>


                </div>
                        
            </div>)}


            {props.step === 5 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-16 flex justify-center">
                <div className="w-[80%] flex flex-col items-center content-center">

                    <img src="../public/assets/images/icon-thank-you.svg" alt="thank you icon" className="w-16 mb-5" />
                    <h2 className="text-2xl mb-3">Thank you!</h2>
                    <p className="text-center">
                        Thanks for confirming your subscribtion!
                        We hope you have fun using our platform.If you ever need support, Please feel free to 
                        email us at support@loremgaming.com.
                    </p>

                </div>         
            </div>)}




        </>
      )
      
}