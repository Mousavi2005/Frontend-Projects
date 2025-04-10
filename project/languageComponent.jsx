// import { languages } from "./languages";

export default function lanquage(props) {
    // console.log(props.eliminated)
    return(
        <div style={{backgroundColor: props.backgroundColor, color: props.color, opacity: props.eliminated == 1 ? 0.1 : 1 }}>{props.name}</div>
    )
}