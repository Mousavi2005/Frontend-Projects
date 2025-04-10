import { languages } from "./languages"
import LanquageComponent from "./languageComponent"

export default function lanquagesContainerComponent(props) {
    return (
        <>

        <div className="lanquage-container">

            {languages.map((obj, index) => <LanquageComponent key = {index} id = {index} eliminated = {props.eliminated[index]} name = {obj.name} backgroundColor = {obj.backgroundColor} color = {obj.color}/>)}

            {/* <div style={{backgroundColor: 'blue'}}>Html</div>
            <div id="l1">CSS</div>
            <div id="l1">JavaScript</div>
            <div id="l1">React</div>
            <div id="l1">TypeScript</div>
            <div id="l1">Node.js</div>
            <div id="l1">Python</div>
            <div id="l1">Ruby</div>
            <div id="l1">Assembly</div> */}

        </div>
        
        </>
    )
}