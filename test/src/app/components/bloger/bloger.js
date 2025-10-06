export default function Bloger({image, title}) {
    return(
        <div>
            <div className="w-16 h-16 bg-white border-[1px] border-purple-600 rounded-full">{image}</div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    )
}
