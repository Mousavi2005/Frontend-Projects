import { useState } from 'react'
import './App.css'
import DiceComponent from '../die'

let tempt = 1

function App() {

  const [numbersArray, setNumbersArray] = useState([])
  const [a, seta] = useState()

  function generateAllNewDice(){
    let numbers = []
    for (let i = 0 ;i <10; i++){
      let randomNumber = Math.floor(Math.random()*6) + 1
      numbers.push(randomNumber)
    }
    setNumbersArray(numbers.map((n, index) => ({value:n, isHeld: false, id:index}) ))
  }
  if (tempt == 1){
    generateAllNewDice()
    tempt++

  }
  console.log(numbersArray)

  function hold(id){
    console.log(id)
    setNumbersArray(prev => (
      prev.map(oldobj => (
        oldobj.id === id ? {...oldobj, isHeld: !oldobj.isHeld} : oldobj
      ))
    ))
  }
    


  // console.log(numbersArray)

  return (
    <main>

      <div className="dice-container">
        {numbersArray.map((obj, index) => <DiceComponent key = {index} id = {index} value = {obj.value} isHeld = {obj.isHeld} function = {hold}/>)}
        {a}
      </div>

      <button onClick={generateAllNewDice} className='roll-dice-btn'>Rol</button>

    </main>
  )
}

export default App
