export default function formComponent(props) {
    return(
        <form action={props.submit} className="relative flex justify-center w-[80%] max-w-[650px] mx-auto">

            <div className="w-5 h-5 ml-[2%] rounded-full absolute left-2 top-1/2 -translate-y-1/2 shadow-md border-[1px] border-black dark:border-[#777a92]"></div>
            <input type="text" name="input" id="input" placeholder="Create a new todo" className="pl-[max(6.5%,45px)] h-14 md:h-16 w-full rounded-md dark:bg-[#25273c] dark:placeholder-[#777a92] dark:text-[#cacde8]"/>

        </form>
    )
}