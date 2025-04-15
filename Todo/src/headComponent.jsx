export default function headComponent(props) {
    return (
        <div className="flex justify-between pt-8 pb-6 px-2 w-[80%] max-w-[650px] mx-auto">
            <span className="text-[35px] text-white">TODO</span>

            <button onClick={props.toggle}>
            <img src="../images/icon-moon.svg" alt="moon-icon" className="w-8 h-8 dark:hidden"/>
            <img src="../images/icon-sun.svg" alt="moon-icon" className="w-8 h-8 hidden dark:block"/>
            </button>

        </div>
    )
}