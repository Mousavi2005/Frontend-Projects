import { useEffect, useState } from 'react'
import HeadComponent from '../headComponent'
import MainComponent from '../mainComponent'
import './App.css'

function App() {
  const [memes, setMemes] = useState(null)

  useEffect(function() {

    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemes(data.data.memes))

  }, [])


  return (
    <>

      <HeadComponent />
      <MainComponent AllMemes = {memes}/>

    </>
  )
}

export default App
