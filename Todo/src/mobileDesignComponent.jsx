export default function mobileDesignComponent(props) {
    console.log(props.show )
    return(
        <>
            <div className="md:hidden flex w-full h-12 justify-between items-center dark:bg-[#25273c] bg-white p-2">
              <p className="text-xs text-[#9394a5] dark:text-[#777a92]">{props.active_tasks.length} items left</p>
              <button onClick={props.clearCompleted} className="text-xs text-[#9394a5] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Clear Completed</button>
          </div>
          <div className="md:hidden flex w-full max-w-[650px] h-14 p-2 mx-auto mt-5 bg-white dark:bg-[#25273c] rounded-lg">
            <div className="btn-container flex justify-evenly items-center w-full">
              <button onClick={props.showAllTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.show ? 'text-[#5462eb] dark:text-[#5462eb]' : 'text-[#484b6a] dark:text-[#777a92]'}`}>All</button>
              <button onClick={props.showActiveTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.showAtive ? 'text-[#5462eb] dark:text-[#5462eb]' : 'text-[#484b6a] dark:text-[#777a92]' }`}>Active</button>
              <button onClick={props.showCompletedTasks} className={`text-lg hover:text-[#5462eb] dark:hover:text-[#5462eb] ${props.showCompleted ? 'text-[#5462eb] dark:text-[#5462eb]' : 'text-[#484b6a] dark:text-[#777a92]'}`}>Completed</button>
            </div>
          </div>
        </>
    )
}