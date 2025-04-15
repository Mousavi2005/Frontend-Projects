import { useEffect, useRef, useState } from "react"
import TaskComponent from "./taskComponent"

let done_tasks = []
let active_tasks = []

export default function App() {
  const [data, setData] = useState([])
  const [tasks, setTasks] = useState([])

  const Ref = useRef()

  function submiteHandle(formData) {
    const value = formData.get('input')

    if (!data.some(item => item.v === value)) {

      setData(prev => [...prev, {v:value, c:false}])
      active_tasks.push({v:value, c:false})
      
    } else {

      alert("You have already added this task")
    }
  }


  function clickTask(id) {

    setData((prevData) => 
      prevData.map((item, index) => 
        index === id ? { ...item, v: item.v, c: !item.c } : item
      )
    );

    if (!data[id].c) {

      const deletedValue = data[id].v
      done_tasks.push({v:data[id].v, c:true})
      active_tasks = active_tasks.filter(item => item.v !== deletedValue)

    } else {

      const addedValue = data[id].v
      done_tasks = done_tasks.filter(item => item.v !== addedValue);
      active_tasks.push({v:data[id].v, c:false})
    }

  }

  function deleteTask(id) {

    setData(prev =>
      prev.filter((item, i) => i !== id)
    );
  }

  function clearCompleted() {

    setData(prev =>
      prev.filter(item => !item.c)
    );
  }

  function showAllTasks() {
    let all_tasks = [...active_tasks, ...done_tasks]

    setData(all_tasks)
  }

  function showCompletedTasks() {

    setData(done_tasks.map(val => ({v:val.v, c:val.c})))
    
  }

  function showActiveTasks() {

    setData(active_tasks.map(val => ({v:val.v, c:val.c})))
    
  }

  function toggle() {
    document.documentElement.classList.toggle('dark');
    // console.log('clicked')
    
  }

  useEffect(() => {
    setTasks(data.map((d, index) => <TaskComponent key= {index} id={index} func={clickTask} function = {deleteTask} value = {d.v} checked={d.c}/>))

  }, [data])



  return (
    <main>
      <div className="background-container w-full h-[200px] md:h-[230px] bg-[url('../images/bg-mobile-light.jpg')] bg-no-repeat bg-cover dark:bg-[url('../images/bg-mobile-dark.jpg')]">
        
        {/* LOGO AND DARK/LIGHT TOGGLE */}
        <div className="flex justify-between pt-8 pb-6 px-2 w-[80%] max-w-[650px] mx-auto">
          <span className="text-[35px] text-white">TODO</span>

          <button onClick={toggle}>
            <img src="../images/icon-moon.svg" alt="moon-icon" className="w-8 h-8 dark:hidden"/>
            <img src="../images/icon-sun.svg" alt="moon-icon" className="w-8 h-8 hidden dark:block"/>
          </button>

        </div>

        {/* FORM */}
        <form action={submiteHandle} className="relative flex justify-center w-[80%] max-w-[650px] mx-auto">

          <div className="w-5 h-5 ml-[2%] rounded-full absolute left-2 top-1/2 -translate-y-1/2 shadow-md border-[1px] border-black dark:border-[#777a92]"></div>
          <input ref={Ref} type="text" name="input" id="input" placeholder="Create a new todo" className="pl-[max(6.5%,45px)] h-14 md:h-16 w-full rounded-md dark:bg-[#25273c] dark:placeholder-[#777a92] dark:text-[#cacde8]"/>

        </form>

        <div className="tasks-container flex flex-col justify-center items-center mt-3 rounded-lg overflow-hidden w-[80%] max-w-[650px] mx-auto">
          {tasks}

          {/* MOBILE */}
          <div className="md:hidden flex w-full h-12 justify-between items-center dark:bg-[#25273c] bg-white p-2">
              <p className="text-xs text-[#9394a5] dark:text-[#777a92]">{active_tasks.length} items left</p>
              <button onClick={clearCompleted} className="text-xs text-[#9394a5] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Clear Completed</button>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center justify-between w-full max-w-[650px] h-14 md:h-16 p-5 mx-auto bg-white dark:bg-[#25273c]">
            <p className="text-xs md:text-[#9394a5] dark:text-[#777a92]">{active_tasks.length} items left</p>

            <div className="btn-container flex justify-evenly items-center w-[50%]">
              <button onClick={showAllTasks} className="text-lg md:text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">All</button>
              <button onClick={showActiveTasks} className="text-lg md:text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Active</button>
              <button onClick={showCompletedTasks} className="text-lg md:text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Completed</button>
            </div>

            <button onClick={clearCompleted} className="text-xs md:text-[#9394a5] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Clear Completed</button>

          </div>
          
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex w-[80%] max-w-[650px] h-14 p-2 mx-auto mt-5 bg-white dark:bg-[#25273c] rounded-lg">
            <div className="btn-container flex justify-evenly items-center w-full">
              <button onClick={showAllTasks} className="text-lg text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">All</button>
              <button onClick={showActiveTasks} className="text-lg text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Active</button>
              <button onClick={showCompletedTasks} className="text-lg text-[#484b6a] dark:text-[#777a92] hover:text-[#5462eb] dark:hover:text-[#5462eb]">Completed</button>
            </div>
        </div>


      </div>
    </main>
  )
}