import MobileHeadComponent from "./mobilehead"
import MobileBodyComponent from "./mobileBody"
import MobileBottomComponent from "./mobileBottom"

export default function mobileDesign() {
    return (
        <div className="w-full h-full flex flex-col items-center">

            <div className=" absolute z-0 w-full h-[20%] bg-[url('../public/assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-center bg-cover"></div>
        
            <MobileHeadComponent />

            <MobileBodyComponent step = {3} />

            <MobileBottomComponent step = {2} />


        </div>
    )
}