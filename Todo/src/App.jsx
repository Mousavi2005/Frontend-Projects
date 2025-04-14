import { useEffect, useRef, useState } from "react"
import TaskComponent from "../taskComponent"

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
      <div className="background-container w-full h-[200px] bg-[url('../images/bg-mobile-light.jpg')] bg-no-repeat bg-cover dark:bg-[url('../images/bg-mobile-dark.jpg')]">
        
        <div className="logo flex justify-between py-8 px-8">
          <span className="text-[35px] text-white">TODO</span>

          <button onClick={toggle}>
            <img src="../images/icon-moon.svg" alt="moon-icon" className="w-8 h-8 dark:hidden"/>
            <img src="../images/icon-sun.svg" alt="moon-icon" className="w-8 h-8 hidden dark:block"/>
          </button>

        </div>

        <form action={submiteHandle} className="relative flex justify-center">

          <input ref={Ref} type="text" name="input" id="input" placeholder="Create a new todo" className="pl-[6.5%] h-14 w-[80%] rounded-md dark:bg-[#25273c] dark:placeholder-[#777a92]"/>
          <button className="absolute left-[12%] top-1 bottom-1 my-auto w-4 h-4 rounded-full shadow-md border-[1px] border-black dark:border-[#777a92]"></button>

        </form>

        <div className="tasks-container flex flex-col justify-center items-center mt-3 rounded-lg overflow-hidden w-[80%] mx-auto">
          {/* {data.map((d, index) => <TaskComponent key= {index} id={index} func={clickTask} value = {d} checked={false}/>)} */}
          {tasks}

          <div className="flex w-full h-12 justify-between items-center dark:bg-[#25273c] p-2">
              <p className="text-xs dark:text-[#777a92]">{active_tasks.length} items left</p>
              <button onClick={clearCompleted} className="text-xs dark:text-[#777a92] dark:hover:text-[#5462eb]">Clear Completed</button>
          </div>
          
        </div>

        <div className="flex w-[80%] h-14 p-2 mx-auto mt-5 dark:bg-[#25273c] rounded-lg">
            <div className="btn-container flex justify-between items-center w-full">
              <button onClick={showAllTasks} className="text-lg dark:text-[#777a92] dark:hover:text-[#5462eb]">All</button>
              <button onClick={showActiveTasks} className="text-lg dark:text-[#777a92] dark:hover:text-[#5462eb]">Active</button>
              <button onClick={showCompletedTasks} className="text-lg dark:text-[#777a92] dark:hover:text-[#5462eb]">Completed</button>
            </div>
        </div>


      </div>
    </main>
  )
}