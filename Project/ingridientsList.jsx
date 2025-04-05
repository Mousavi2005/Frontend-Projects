import IngredientComponent from "./ingredientComponent"
export default function ingridientsList(props) {
    return (
        <div className="ingredients-list">
            {props.element.map((name, index) => <IngredientComponent key={index} name = {name} />)}
        </div>
    )
}