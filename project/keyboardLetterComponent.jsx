export default function keyboardletter(props) {
    return (
        <button className={`${props.isClicked ? 'clicked' : 'not-clicked'} ${props.include ? 'included' : 'not-included'}`} onClick={() => props.function(props.id)} >{props.letter}</button>
    )
}