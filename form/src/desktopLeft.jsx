// import MobileHeadComponent from "./mobilehead"

export default function DesktopLeftComponent(props) {
    return (
        <div className="flex-[2] p-3">

            <div className="w-full h-full rounded-lg bg-[url('../public/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-center bg-cover flex flex-col gap-5 p-2">
                <div className="flex  gap-4">
                    <div className={`w-10 h-10 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 1 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>1</div>
                    <div className="flex flex-col items-start flex-1">
                        <span className="text-white">Step 1</span>
                        <p className="text-center text-white">Your info</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 2 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>2</div>
                    <div className="flex flex-col items-start flex-1">
                        <span className="text-white">Step 2</span>
                        <p className="text-center text-white">SELECT PLAN</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 3 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>3</div>
                    <div className="flex flex-col items-start flex-1">
                        <span className="text-white">Step 3</span>
                        <p className="text-center text-white">ADD-ONS</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full text-xl font-bold text-white flex items-center justify-center ${props.step == 4 ? 'bg-blue-400 border-blue-400 border-[1px]' : 'border-white border-[1px]'}`}>4</div>
                    <div className="flex flex-col items-start flex-1">
                        <span className="text-white">Step 4</span>
                        <p className="text-center text-white">SUMARY</p>
                    </div>
                </div>

            </div>

        </div>
    )
}