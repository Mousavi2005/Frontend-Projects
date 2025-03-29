export default function JokeComponent(prop) {
    return (
        <div className="joke">
            <p>{prop.setup}</p>
            <p>{prop.punchline}</p>
        </div>
    )
}