export default function FormComponent(props) {

    function handleInput(formdata) {
        const i = formdata.get("ingridient")
        // console.log(i)
        props.addFn(i)
    }

    return (
        <form action={handleInput} className="w-full h-20 flex justify-center items-center gap-8">
            <input type="text" name="ingridient" placeholder="e.g.chicken" id="" className="w-64 h-12 rounded-lg p-2 bg-white text-black placeholder:text-[#9CA3AF] border-[1px] border-black"/>
            <button type="submit" className="text-white bg-[#374151] h-12 px-4 rounded-lg">+ Ingridient</button>
        </form>
    )
}