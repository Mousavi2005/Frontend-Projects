import { useState } from "react"

export default function mainComponent() {
    const [top, setTop] = useState('one does not simply')
    const [bottom, setBottom] = useState("walk into mordor")
    
    function getMemeBtn(){
        const topTextInput = document.querySelector('#top-text').value
        const bottomTextInput = document.querySelector('#bottom-text').value
        setTop(topTextInput)
        setBottom(bottomTextInput)
        // console.log(topTextInput)
        // console.log(bottomTextInput)
    }

    function handler(event) {
        let temp = event.currentTarget.value
        // setTop(temp)
        if (event.currentTarget.id === 'top-text') {
            setTop(temp)
        }
        else if (event.currentTarget.id === 'bottom-text') {
            setBottom(temp)
        }
    }

    return(
        <main>
            

            <div className="form">
                    <div className="top-text-div">
                        <label>
                            Top Text : 
                            <input type="text" name="top-text" id="top-text" 
                                    placeholder="one does not simply"
                                    onChange={handler}
                            />
                        </label>
                    </div>

                    <div className="bottom-text-div">
                        <label>
                            Bottom Text : 
                            <input type="text" name="bottom-text" id="bottom-text" 
                                placeholder="walk into mordor"
                                onChange={handler}
                            
                            />
                        </label>
                    </div>

                {/* <button>Get a new meme image</button> */}

            </div>

            <button onClick={getMemeBtn}>Get a new meme image</button>

            <div className="meme">
                <img src="./sydney.jpg" alt="" />
                <span id="top-span">{top}</span>
                <span id="bottom-span">{bottom}</span>
            </div>

        </main>
    )
}