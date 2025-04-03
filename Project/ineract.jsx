import React from "react"
import IngredientComponent from "./ingredientComponent";

export default function Interact() {

    let [element, setElement] = React.useState([])

    function addIngredient(formData) {

        const value = formData.get('ingredient')
        setElement(prev => [...prev,value])

    }

    return (
        <>
            <form action={addIngredient} className="interact">
                <input name="ingredient" type="text" placeholder="e.g rice"/>
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
