import { useState } from 'react'
import './App.css'
import TextComponent from '../textComponent'
import LanquagesContainerComponent from '../languagesContainerComponent'
import LetterComponent from '../letterComponent'
import Keyboardletter from '../keyboardLetterComponent'
import {words} from "../words"

const allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const selectedLetters = []
let wordLetters = []
let wrongTry = 0

function randomWord(words) {
  let randomNumber = Math.floor(Math.random() * words.length)
  return(words[randomNumber].toUpperCase())
}

function App() {
  const [word, setWord] = useState(() => randomWord(words))
  console.log(word)

  const [keyboard, setKeyboard] = useState(() => allLetters.map((alphabet, index) => <Keyboardletter key = {index} id = {index}  letter = {allLetters[index]} isClicked = {false} include = {false} function = {clicked}/>))
  const [letters, updateletters] = useState(() => word.split('').map((l, index) => <LetterComponent key = {index} shown = {false} letter = {l} />))
  const [eliminatedArray, setEliminatedArray] = useState(() => [0,0,0,0,0,0,0,0,0])
  word.split('').map(o => wordLetters.push(o))



  // let wrongTry = 0

  function checkWin(a) {
    if (a < 8) {
      // console.log('c')

      for(let i = 0; i < wordLetters.length; i++){
        if (!selectedLetters.includes(wordLetters[i])) {
  
            return 'continue'
          
        }
      }
      
    }

    if (a == 8) {
      // console.log('l')

      return 'lost'
      
    }else {
      // console.log('w')

      return 'won'
    }
  }

  function clicked(id) {
    let include = false

    if (wordLetters.includes(allLetters[id])) {
      include = true
      selectedLetters.push(allLetters[id])

    }else {
      wrongTry++
      let temp = wrongTry
      const update = []

      for (let i = 0; i < 9; i++) {
        if (temp > 0) {
          update.push(1)
          temp -= 1
          
        }else {
          update.push(0)
        }
      }

      setEliminatedArray(update)

    }

    updateletters(word.split('').map((l, index) => selectedLetters.includes(l) ? <LetterComponent key = {index} shown = {true} letter = {l} /> : <LetterComponent key = {index} shown = {false} letter = {l} />))
    setKeyboard(prev => prev.map((o, index) => (index == id ? <Keyboardletter key = {index} id = {index}  letter = {allLetters[index]} isClicked = {true} include = {include} function = {clicked}/> : o)))

  }



  return (
    <main>

      <TextComponent />
      <LanquagesContainerComponent eliminated = {eliminatedArray} />
      
      <div className="all-letter-container">
        {/* <LetterComponent /> */}
        {letters}
      </div>

      {checkWin(wrongTry) == 'continue' &&  <div className="keyboard-container">{keyboard}</div>}
      {checkWin(wrongTry) == 'lost' &&  <p className='resualt-text'>Lost</p>}
      {checkWin(wrongTry) == 'won' &&  <p className='resualt-text'>Won</p>}

    </main>
  )
}

export default App
