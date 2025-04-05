export default function recipeButton(props) {
    return(
        props.element.length >= 4 && !props.recipeShown && <section className="bottom">
            <div className="recipe-container">

                <div className="text-container">
                    <h3>Ready for recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>

                <button onClick={props.function} className="get-recipe-btn">Get a recipe</button>

            </div>
        </section>
    )
}