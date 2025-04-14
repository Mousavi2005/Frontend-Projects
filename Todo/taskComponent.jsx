export default function taskComponent(props) {
    // console.log(props.value)
    return (
        <div className="task flex justify-between">

            <div className="left flex items-center gap-4">
                <button className={props.checked ? 'checked' : 'unchecked'} onClick={() => props.func(props.id)}></button>
                <p className={props.checked ? 'draw-line' : 'no-draw-line'}>
                    {props.value}
                </p>
            </div>
            <button onClick={() => props.function(props.id)} className="right-btn">
                <img src="../images/icon-cross.svg" alt="" />
            </button>
        </div>
    )
}