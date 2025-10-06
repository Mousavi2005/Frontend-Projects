import ScrollImage from "./scrollimage"
export default function ScrollImageDiv({images}) {
    return (
        <div className="w-full h-36 bg-blue-400 flex">
            {images.map((i, index) => (
                <ScrollImage key={index} image={i}></ScrollImage>
            ))}
        </div>
    )

}
