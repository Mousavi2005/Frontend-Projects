import React from "react"
import IngredientComponent from "./ingredientComponent";
import Recipe from "./recipeComponent";
import IngridientsList from "./ingridientsList";
import RecipeButton from "./recipeButtonComponent";

export default function Interact() {

    let [element, setElement] = React.useState([])
    let [recipeShown, setRecipeshown] = React.useState(false)

    function addIngredient(formData) {

        const value = formData.get('ingredient')
        setElement(prev => [...prev,value])

    }

    function diplayRecipe() {
        setRecipeshown(true)
    }

    return (
        <>
            <form action={addIngredient} className="interact">
                <input name="ingredient" type="text" placeholder="e.g rice"/>
                <button  className="add-ingredient-btn">+ Add ingredient</button>
            </form>
            
            <div className='body-head-text'>
                {(element.length > 0) && <h2>Ingridients on band</h2>}
            </div>

            <IngridientsList element = {element} />
            
            <RecipeButton element = {element}  recipeShown = {recipeShown} function = {diplayRecipe}/>

            <Recipe isShown = {recipeShown}/>

                
        </>
    )
}
