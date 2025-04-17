import { useState } from "react"

export default function MobileBodyComponent(props) {

    const [monthOrYear, setMonthOrYear] = useState(() => 'M')
    const [selected, setSelected] = useState(() => [false,false,false])

    function setMonthly() {
        
        setMonthOrYear('M')
    }

    function setYearly() {
        setMonthOrYear('Y')
    }

    // console.log(monthOrYear)

    return (
        <>
          {props.step === 1 && (
            <div className="z-[1] w-[94%] bg-white rounded-xl px-5 py-8">
              <h2 className="text-3xl">Personal Info</h2>
              <p className="text-xl text-gray-400 mt-2">
                Please provide your name, email address and phone number
              </p>
      
              <form action="" className="flex flex-col w-full mt-4">
                <label className="my-1">
                  Name
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-400 rounded"
                    placeholder="e.g. Stephen King"
                  />
                </label>
      
                <label className="my-1">
                  Email
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-400 rounded"
                    placeholder="e.g. stephenking@lorem.com"
                  />
                </label>
      
                <label className="my-1">
                  Phone Number
                  <input
                    type="text"
                    className="w-full p-2 border-2 border-gray-400 rounded"
                    placeholder="e.g. +1 234 567 890"
                  />
                </label>
              </form>
            </div>
          )}

          {props.step === 2 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-8 flex flex-col ">

                <h2 className="text-3xl">Select your plan</h2>
                <p className="text-xl max-w-[80%] text-gray-400 mt-2">
                You have the option of monthly or yearly billing
                </p>

                <div className="w-full flex flex-col items-center">

                    <button className="w-full h-20 border-2 border-gray-500 flex justify-start gap-7 rounded-lg my-2 pl-2 hover:border-blue-700">
                        <img src="../public/assets/images/icon-arcade.svg" alt="arcade-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center">
                            <span className="text-lg">Arcade</span>
                            <span className="text-sm">${monthOrYear === 'M' ? 9 : 90}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>

                    <button className="w-full h-20 border-2 border-gray-500 flex justify-start gap-7 rounded-lg my-2 pl-2 hover:border-blue-700">
                        <img src="../public/assets/images/icon-advanced.svg" alt="advanced-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center">
                            <span className="text-lg">Advanced</span>
                            <span className="text-sm">${monthOrYear === 'M' ? 12 : 120}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>

                    <button className="w-full h-20 border-2 border-gray-500 flex justify-start gap-7 rounded-lg my-2 pl-2 hover:border-blue-700">
                        <img src="../public/assets/images/icon-pro.svg" alt="pro-icon" className="w-12"/>
                        <div className="w-16 flex flex-col justify-center">
                            <span className="text-lg">Pro</span>
                            <span className="text-sm">${monthOrYear === 'M' ? 15 : 150}/mo</span>
                            {/* <span>2 months free</span> */}
                        </div>
                    </button>   
                </div>


                <div className="w-full flex items-center justify-between">
                        <form action='' className="flex w-full justify-between">

                            <label class="cursor-pointer flex gap-1">
                                Monthly
                                <input type="radio" name="hi" onChange={setMonthly}/>
                            </label>

                            <label class="cursor-pointer flex gap-1">
                                <input type="radio" name="hi" onChange={setYearly}/>
                                Yearly
                            </label>

                        </form>
                        {/* <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" class="sr-only peer" name="hi" onChange={temp}/>
                            <div class="w-11 h-6 bg-blue-900 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
                            <div class="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                        </label> */}
                        {/* Yearly */}
                </div>
                           
            </div>)}


            {props.step === 3 && (

            <div className="z-[1] w-[94%] bg-white rounded-xl px-8 py-8 flex flex-col ">

                <h2 className="text-3xl">Pick add-ons</h2>
                <p className="text-xl max-w-[80%] text-gray-400 mt-2">
                Add-ons help inhance your gaming experience
                </p>

                <div className="w-full flex flex-col items-center">

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 border-gray-500 ${selected[0] ? 'border-blue-700' : 'border-gray-500' }`}>
                        <input type="checkbox" className="w-7 mr-5" onChange={() => setSelected(prev => prev.map((o, index) => index == 0 ? !o : o))}/>
                        <div className="flex flex-col justify-center">
                            <span className="text-lg">Online service</span>
                            <p className="text-sm">Access to multipllayer games</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 1 : 10}/mo</span>
                    </div>

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 border-gray-500 ${selected[1] ? 'border-blue-700' : 'border-gray-500' }`}>
                        <input type="checkbox" className="w-7 mr-5" onChange={() => setSelected(prev => prev.map((o, index) => index == 1 ? !o : o))}/>
                        <div className="flex flex-col justify-center">
                            <span className="text-lg">Larger storage</span>
                            <p className="text-sm">Extra 1TB of cliud service</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 2 : 20}/mo</span>
                    </div>

                    <div className={`relative w-full h-20 border-2 flex justify-start rounded-lg my-2 pl-2 border-gray-500 ${selected[2] ? 'border-blue-700' : 'border-gray-500' }`}>
                        <input type="checkbox" className="w-7 mr-5" onChange={() => setSelected(prev => prev.map((o, index) => index == 2 ? !o : o))}/>
                        <div className="flex flex-col justify-center">
                            <span className="text-lg">Customizable profile</span>
                            <p className="text-sm"> Custom theme on your profile</p>
                        </div>
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-700">+${monthOrYear === 'M' ? 2 : 20}/mo</span>

                    </div>
 
                </div>
                        
            </div>)}

        </>
      )
      
}