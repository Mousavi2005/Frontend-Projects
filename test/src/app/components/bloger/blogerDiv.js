import Bloger from "./bloger"

export default function BlogerDiv({blogersArray}) {
    return(
        <div className="w-full h-28 bg-yellow-300 flex items-center gap-3">
            {blogersArray.map((bloger, index) => (
                <Bloger key={index} image={bloger.image} title={bloger.title}></Bloger>
            ))}
        </div>
    )
}
