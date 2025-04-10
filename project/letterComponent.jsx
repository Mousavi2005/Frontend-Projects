export default function letterComponent(props) {

    return (
        <div style={{backgroundColor: '#787878', borderBottom: '2px solid white',}} className="letter-container">
            {props.shown ? props.letter : ''}
        </div>
    )
}