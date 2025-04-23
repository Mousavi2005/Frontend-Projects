export default function IngridientListComponent(props) {

    function showAiRecipe() {
        props.setShowRecipe(true)
    }

    return (
        <div className="w-full min-h-72 flex flex-col items-center">

            <div className="w-full flex flex-col items-center">
                <p className="mt-8 mb-2 text-3xl w-[80%] pb-5">Ingridients on list</p>
                <div className="flex flex-col pl-6 w-[80%]">
                    {props.ingridients.map(i => <li className="leading-8 my-2 text-xl font-normal">{i}</li>)}
                </div>
            </div>
            
            {/* <p className="mt-8 mb-2 text-3xl w-full flex justify-center pb-5">Ingridients on list : </p>
            <div className="w-full flex flex-col">
                {props.ingridients.map(i => <li className="leading-8 my-2 text-xl font-normal">{i}</li>)}
            </div> */}

            <div className={`w-full h-24 flex flex-col items-center justify-between py-8 pb-40 ${props.showGenerateBtn ? 'block' : 'hidden'}`}>
                <p className="text-lg">Ready to generate recipe?</p>
                <button onClick={showAiRecipe} className="bg-[#F97316] text-white px-4 py-2 rounded-lg text-lg">Generate</button>
            </div>

        </div>
    )
}