// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../head'
import Interact from '../ineract'
import IngredientComponent from '../ingredientComponent'
import GetRecipe from '../getRecipe'

function App() {
  return (
    <>

      <Header />
      <Interact />
      <div className='body-head-text'>
        <h2>Ingredients on hand : </h2>
      </div>
      
      <div className='ingredient-container'>
        {/* <IngredientComponent /> */}
      </div>

      <GetRecipe />

    </>
  )
}

export default App
