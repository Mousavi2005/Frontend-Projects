export default function taskComponent(props) {
    return (
        <div className="group w-full min-h-14 md:min-h-16 hover:*:opacity-100 pt-1 bg-white dark:bg-[#25273c] border-b border-[#d2d3db] dark:border-[#777a92] flex items-center justify-between">

            <div className="left flex items-center gap-4">
                <button className={props.checked ? 'checked' : 'unchecked'} onClick={() => props.func(props.id)}></button>
                {/* <p className={props.checked ? 'draw-line' : 'no-draw-line'}>
                    {props.value}
                </p> */}
                <p className={`${props.checked ? 'text-gray-600 line-through dark:text-[#777a92]' : 'dark:text-[#cacde8]'}`}>
                    {props.value}
                </p>

            </div>
            <button onClick={() => props.function(props.id)} className="right-btn opacity-0 group-hover:opacity-100 mr-2">
                <img src="../images/icon-cross.svg" alt="" />
            </button>
        </div>
    )
}