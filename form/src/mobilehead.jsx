export default function MobileHeadComponent(props) {
    return (
        // <div className=" z-[1] flex w-[60%] h-fit justify-around my-10">
        //     <div className={`w-12 h-12 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 1 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>1</div>
        //     <div className={`w-12 h-12 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 2 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>2</div>
        //     <div className={`w-12 h-12 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 3 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>3</div>
        //     <div className={`w-12 h-12 rounded-full text-xl font-bold text-white flex items-center justify-center ${(props.step == 4 || props.step == 5) ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>4</div>

        // </div>
        <>

            <div className={`w-12 h-12 rounded-full text-xl font-bold flex items-center justify-center ${props.step == 1 ? 'bg-blue-400 text-[#022959] border-blue-400 border-[1px]' : 'text-white border-white border-[1px]'}`}>1</div>
            <div className={`w-12 h-12 rounded-full text-xl font-bold flex items-center justify-center ${props.step == 2 ? 'bg-blue-400 text-[#022959] border-blue-400 border-[1px]' : 'text-white border-white border-[1px]'}`}>2</div>
            <div className={`w-12 h-12 rounded-full text-xl font-bold flex items-center justify-center ${props.step == 3 ? 'bg-blue-400 text-[#022959] border-blue-400 border-[1px]' : 'text-white border-white border-[1px]'}`}>3</div>
            <div className={`w-12 h-12 rounded-full text-xl font-bold flex items-center justify-center ${(props.step == 4 || props.step == 5) ? 'bg-blue-400 text-[#022959] border-blue-400 border-[1px]' : 'text-white border-white border-[1px]'}`}>4</div>
        </>
    )
}