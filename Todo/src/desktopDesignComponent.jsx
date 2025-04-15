export default function desktopDesignComponent(props) {
    return(

        <div className="hidden md:flex items-center justify-between w-full max-w-[650px] h-14 md:h-16 p-5 mx-auto bg-white dark:bg-[#25273c]">
                
            <p className="text-xs md:text-[#9394a5] dark:text-[#777a92]">{props.active_tasks.length} items left</p>
            <div className="btn-container flex justify-evenly items-center w-[50%]">
            <button onClick={props.showAllTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.show ? 'md:text-[#5462eb] dark:text-[#5462eb]' : 'md:text-[#484b6a] dark:text-[#777a92]'}`}>All</button>
            <button onClick={props.showActiveTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.showAtive ? 'md:text-[#5462eb] dark:text-[#5462eb]' : 'md:text-[#484b6a] dark:text-[#777a92]'} `}>Active</button>
            <button onClick={props.showCompletedTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.showCompleted ? 'md:text-[#5462eb] dark:text-[#5462eb]' : 'md:text-[#484b6a] dark:text-[#777a92]'}`}>Completed</button>
            </div>
            <button onClick={props.clearCompleted} className="text-xs md:text-[#9394a5] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Clear Completed</button>

      </div>
    )
}