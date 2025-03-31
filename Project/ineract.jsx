import React from "react"
import ingredientComponent from "./ingredientComponent"
import ReactDOM from 'react-dom/client'
// const ingredients = []
// ingredients.push()


export default function interact() {
    return (
        <form onSubmit={addIngredient} className="interact">
            <input type="text" placeholder="e.g rice"/>
            <button  className="add-ingredient-btn">+ Add ingredient</button>
        </form>
    )
}

function addIngredient(e) {
    e.preventDefault();

    const input = document.querySelector("input")
    const value = input.value;
    const element = React.createElement(ingredientComponent, { name: value });
    const parent = document.querySelector(".ingredient-container");
    const newDiv = document.createElement('div')

    parent.appendChild(newDiv)
    ReactDOM.createRoot(newDiv).render(element)

    input.value = ''
    // console.log(ingredients)

  }



