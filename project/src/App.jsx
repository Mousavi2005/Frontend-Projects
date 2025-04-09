import { useState } from 'react'
import './App.css'
import TextComponent from '../textComponent'
import LanquagesContainerComponent from '../languagesContainerComponent'
import LetterComponent from '../letterComponent'
import Keyboardletter from '../keyboardLetterComponent'

const allLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const selectedLetters = []
let wordLetters = []
let word = 'HI'
word.split('').map(o => wordLetters.push(o))

function App() {

  const [keyboard, setKeyboard] = useState(() => allLetters.map((alphabet, index) => <Keyboardletter key = {index} id = {index}  letter = {allLetters[index]} isClicked = {false} include = {false} function = {clicked}/>))
  // let word = 'HI'
  // word.split('').map(o => woedLetters.push(o))
  // console.log(wordLetters)

  function clicked(id) {
    let include = false
    if (wordLetters.includes(allLetters[id])) {
      include = true
    } 

    setKeyboard(prev => prev.map((o, index) => (index == id ? <Keyboardletter key = {index} id = {index}  letter = {allLetters[index]} isClicked = {true} include = {include} function = {clicked}/> : o)))

    console.log('----------')

  }

  return (
    <main>

      <TextComponent />
      <LanquagesContainerComponent />
      
      <div className="all-letter-container">
        <LetterComponent />
      </div>

      <div className="keyboard-container">
        {keyboard}
      </div>

    </main>
  )
}

export default App
