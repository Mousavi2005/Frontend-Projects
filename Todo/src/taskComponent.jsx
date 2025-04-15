export default function taskComponent(props) {
    return (
        <div className="group w-full min-h-14 md:min-h-16 hover:*:opacity-100 pt-1 bg-white dark:bg-[#25273c] border-b border-[#d2d3db] dark:border-[#777a92] flex items-center justify-between">

            <div className="flex items-center gap-4 w-full pl-[5px]">

                <button className={props.checked ? 'flex-grow-0 w-5 h-5  rounded-full ml-[2%] mr-[4.5%] bg-[#6a6afc] bg-[url("../images/icon-check.svg")] bg-no-repeat bg-center'
                                                    : 'flex-grow-0 w-5 h-5 border-[1px] border-black dark:border-[#777a92] rounded-full ml-[2%] mr-[4.5%]'} 
                                    onClick={() => props.func(props.id)}>
                </button>
                <p className={`${props.checked ? 'text-gray-600 line-through dark:text-[#777a92]' : 'dark:text-[#cacde8]'} max-w-[75%] whitespace-normal`}>
                    {props.value}
                </p>

            </div>
            <button onClick={() => props.function(props.id)} className="right-btn opacity-0 group-hover:opacity-100 mr-2">
                <img src="../images/icon-cross.svg" alt="" />
            </button>
        </div>
    )
}