import React from "react"
import IngredientComponent from "./ingredientComponent";

export default function Interact() {
    let [element, setElement] = React.useState([])

    function addIngredient(e) {
        e.preventDefault();

        const input = document.querySelector("input")
        const value = input.value
        setElement(prev => [...prev,value])

        input.value = ''

      }

    return (
        <>
            <form onSubmit={addIngredient} className="interact">
                <input type="text" placeholder="e.g rice"/>
                <button  className="add-ingredient-btn">+ Add ingredient</button>
            </form>
            <div className='body-head-text'>
                <h2>Ingredients on hand : </h2>
            </div>
            <div className="ingredients-list">
                {element.map((name, index) => <IngredientComponent key={index} name = {name} />)}
                
            </div>
        </>
    )
}
