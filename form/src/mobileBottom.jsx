export default function mobileBottomComponent(props) {
    return (
        <>

            {props.step == 1 && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-end items-center px-3">
                <button className="w-[120px] h-[50px] bg-blue-800 text-white rounded text-lg">Next Step</button>
            </div>

            </div>)}


            {props.step == 2 && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-between items-center px-3">
                <button>Go Back</button>
                <button className="w-[120px] h-[50px] bg-blue-800 text-white rounded text-lg">Next Step</button>
            </div>

            </div>)}            
        
        </>

    )
}