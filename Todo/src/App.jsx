import { useEffect, useState } from "react"
import TaskComponent from "./taskComponent"
import HeadComponent from "./headComponent"
import FormComponent from "./formComponent"
import MobileDesignComponent from "./mobileDesignComponent"
import DesktopDesignComponent from "./desktopDesignComponent"

let done_tasks = []
let active_tasks = []
let userView = []

export default function App() {

  const [data, setData] = useState(() => [])
  const [tasks, setTasks] = useState(() => [])
  const [show, setShow] = useState(() => false)
  const [showAtive, setShowActive] = useState(() => false)
  const [showCompleted, setShowCompleted] = useState(() => false)

  function submiteHandle(formData) {

    const value = formData.get('input')
    if (!data.some(item => item.v === value)) {

      setData(prev => [...prev, {v:value, c:false}])
      active_tasks.push({v:value, c:false})
      userView.push({v:value, c:false})
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
      userView = userView.map((o, index) => index == id ? {v:o.v, c:true} : o)
    } else {

      const addedValue = data[id].v
      done_tasks = done_tasks.filter(item => item.v !== addedValue);
      active_tasks.push({v:data[id].v, c:false})
      userView = userView.map((o, index) => index == id ? {v:o.v, c:false} : o)
    }
  }

  function deleteTask(id) {

    userView = userView.filter(item => item.v !== data[id].v)
    setData(prev =>
      prev.filter((item, i) => i !== id)
    );
  }

  function clearCompleted() {

    userView = userView.filter(item => !item.c)
    setData(prev =>
      prev.filter(item => !item.c)
    );
  }

  function showAllTasks() {

    if (show) {
      
      setData(userView)
      // setShow(prev => !prev)
    } else {

      let all_tasks = [...active_tasks, ...done_tasks]
      setData(all_tasks)
      // setShow(prev => !prev)
    }
    setShow(prev => !prev)
  }

  function showCompletedTasks() {

    if (showCompleted){

      setData(userView)
      setShowCompleted(prev => !prev)
    } else {

      setData(done_tasks.map(val => ({v:val.v, c:val.c})))
      setShowCompleted(prev => !prev)
    }
  }

  function showActiveTasks() {

    if (showAtive) {

      setData(userView)
      setShowActive(prev => !prev)
    } else {

      setData(active_tasks.map(val => ({v:val.v, c:val.c})))
      setShowActive(prev => !prev)
    }
  }

  function toggle() {

    document.documentElement.classList.toggle('dark');
  }

  useEffect(() => {

    setTasks(data.map((d, index) => <TaskComponent key= {index} id={index} func={clickTask} function = {deleteTask} value = {d.v} checked={d.c}/>))
  }, [data])


  return (
    <main>
      <div className="background-container w-full h-[200px] md:h-[230px] bg-[url('../images/bg-mobile-light.jpg')] bg-no-repeat bg-cover dark:bg-[url('../images/bg-mobile-dark.jpg')]">


        {/* LOGO AND DARK/LIGHT TOGGLE */}

        <HeadComponent toggle = {toggle} />


        {/* FORM */}

        <FormComponent submit = {submiteHandle} />


        {/* BODY */}

        <div className="tasks-container flex flex-col justify-center items-center mt-3 rounded-lg overflow-hidden w-[80%] max-w-[650px] mx-auto">

          {tasks}


          {/* MOBILE */}

          <MobileDesignComponent active_tasks = {active_tasks} clearCompleted = {clearCompleted} showAllTasks = {showAllTasks} showActiveTasks = {showActiveTasks} showCompletedTasks = {showCompletedTasks}
           show = {show} showAtive = {showAtive} showCompleted = {showCompleted}/>


          {/* DESKTOP */}

          <DesktopDesignComponent active_tasks = {active_tasks} showAllTasks = {showAllTasks} showActiveTasks = {showActiveTasks} showCompletedTasks = {showCompletedTasks} clearCompleted = {clearCompleted} 
          show = {show} showAtive = {showAtive} showCompleted = {showCompleted} />
          
        </div>

      </div>
    </main>
  )
}