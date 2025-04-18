import MobileDesignComponent from "./mobileDesignComponent"
import DesktopDesignComponent from "./desktopDesignComponent"

export default function App() {
  return (
    <> 
      <main className="w-full h-full flex justify-center items-center md:hidden">
        <MobileDesignComponent />
        {/* <DesktopDesignComponent /> */}
      </main>
      
      <main className="w-full h-full justify-center items-center hidden md:flex">

        <DesktopDesignComponent />


      </main>
    </>

  )
}