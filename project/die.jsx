export default function diceComponent(props) {
    return (
        <button onClick={() => props.function(props.id)} className={String(props.isHeld)}>{props.value}</button>
    )
}