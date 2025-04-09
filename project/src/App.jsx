import { useEffect, useRef, useState } from 'react'
import './App.css'
import DiceComponent from '../die'
import TextComponent from '../textComponent'
import Confetti from 'react-confetti-boom';

let tempt = 1

function App() {

  const [numbersArray, setNumbersArray] = useState([])
  const win = checkWin(numbersArray)
  const btnRef = useRef(null)

  function checkWin(numbersObj){
    if (numbersObj.length == 0){
      return false
    }
    for(let i = 0; i<9; i++){
      if((numbersObj[i].isHeld !== true) || (numbersObj[i].value !== numbersObj[i+1].value)){
        return false
      }
    }
    if (numbersArray[9].isHeld === false){
      return false
    }
    return true

  }

  function generateAllNewDice(){

    let numbers = []

    for (let i = 0 ;i <10; i++){
      let randomNumber = Math.floor(Math.random()*6) + 1
      numbers.push(randomNumber)
    }

    if (numbersArray.length == 0 ){
      setNumbersArray(numbers.map((n, index) => ({value:2, isHeld: false, id:index}) ))

    } else {
      setNumbersArray(prev => (prev.map((oldobj, index) => oldobj.isHeld ? oldobj : {...oldobj, value:numbers[index]})))

    }

  }

  if (tempt == 1){
    generateAllNewDice()
    tempt++

  }

  function hold(id){

    setNumbersArray(prev => (
      prev.map(oldobj => (
        oldobj.id === id ? {...oldobj, isHeld: !oldobj.isHeld} : oldobj
      ))
    ))

  }

  function newGame(){

    let numbers = []

    for (let i = 0 ;i <10; i++){
      let randomNumber = Math.floor(Math.random()*6) + 1
      numbers.push(randomNumber)
    }

    setNumbersArray(numbers.map((n, index) => ({value:n, isHeld: false, id:index})))

  }

  useEffect(function(){
    if (win) {
      btnRef.current.focus()
    }

  },[win])
    
  return (
    <main>

      {win && <Confetti particleCount={1500}/>}
      {/* <Confetti particleCount={1500}/> */}

      <TextComponent />

      <div className="dice-container">
        {numbersArray.map((obj, index) => <DiceComponent key = {index} id = {index} value = {obj.value} isHeld = {obj.isHeld} function = {hold}/>)}
      </div>

      <button ref={btnRef} onClick={win? newGame : generateAllNewDice} className='roll-dice-btn'>{win? 'New Game' : 'Roll'}</button>

    </main>
  )
}

export default App
