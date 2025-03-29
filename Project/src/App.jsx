// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import JokeComponent from '../jokeComponent'
import jokes from '../jokes'

const array = jokes.map(function(j) {
  return (
    <JokeComponent 
      setup = {j.setup}
      punchline = {j.punchline}
    />
  )
})

function App() {
  return (
    <>
      {array}
    </>
  )
}

export default App
