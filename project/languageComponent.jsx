// import { languages } from "./languages";

export default function lanquage(props) {
    return(
        <div style={{backgroundColor: props.backgroundColor, color: props.color}}>{props.name}</div>
    )
}