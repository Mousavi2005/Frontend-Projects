import { useEffect, useState } from 'react';
import RecipeFinder from './Components/AiComponent';
import HeadComponent from './Components/HeadComponent';
import FormComponent from './Components/FormComponent';
import IngridientListComponent from './Components/IngridientsListComponent';

function App() {
  const [ingridients, setIngridients] = useState(() => [])
  const [showRecipe, setShowRecipe] = useState(() => false)
  const [showGenerateBtn, setShowGenerateBtn] = useState(() => false)

  console.log("||||||||")
  console.log(showRecipe)
  console.log("|||||||")


  useEffect(()=>{
    if (ingridients.length >= 4 && !showGenerateBtn) {
      setShowGenerateBtn(true)
    }
  },[ingridients])

  function addToIngridients(i) {
    setIngridients(prev => [...prev, i])

  }
  // console.log(ingridients)


  return (
    <>
    <HeadComponent />
    <FormComponent addFn = {addToIngridients}/>
    <IngridientListComponent ingridients={ingridients} showGenerateBtn={showGenerateBtn} setShowRecipe = {setShowRecipe} />
    <RecipeFinder ingredients={ingridients} showRecipe = {showRecipe} />
    
    </>
  );

}
export default App










// import { useState } from 'react'
// // import RecipeComponent from './Components/AiComponent'
// import { analyzeIngredients } from './Components/AiComponent'
// import HeadComponent from './Components/HeadComponent'
// import FormComponent from './Components/FormComponent'
// import IngridientListComponent from './Components/IngridientsListComponent'
// import './App.css'

// function App() {
//   const [ingridients, setIngridients] = useState(() => [])

//   function addToIngridientsList(i) {
//     // console.log(i)
//     setIngridients(prev => [...prev,i])
//   }

//   return (
//     <>
//     <HeadComponent />

//     <FormComponent addFn = {addToIngridientsList}/>

//     <IngridientListComponent ingridients = {ingridients}/>

//     {/* <RecipeComponent ingridients = {ingridients}/> */}

//     </>
//   )
// }

// export default App
