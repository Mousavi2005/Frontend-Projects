import { useState } from 'react'
import { useStore } from './store'
import './App.css'

function App() {
  const {count, addCount} = useStore()

  return (
    <>
    <div className='w-full h-full bg-blue-400 flex justify-center items-center'>
      {count}
    </div>
    </>
  )
}

export default App
