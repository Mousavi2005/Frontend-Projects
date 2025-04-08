import { useState } from "react"

export default function mainComponent(props) {
    const [top, setTop] = useState('one does not simply')
    const [bottom, setBottom] = useState("walk into mordor")
    const [imgUrl, setImgUrl] = useState(null)

    function handler(event) {

        let temp = event.currentTarget.value

        if (event.currentTarget.id === 'top-text') {
            setTop(temp)
        }
        else if (event.currentTarget.id === 'bottom-text') {
            setBottom(temp)
        }
    }

    function randomMeme() {
        const randomNumber = Math.floor(Math.random()*100)
        setImgUrl(props.AllMemes[randomNumber].url)
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

            </div>

            <button onClick={randomMeme}>Get a new meme image</button>

            <div className="meme">
                <img src={imgUrl == null ? 'sydney.jpg' : imgUrl} alt="" />
                <span id="top-span">{top}</span>
                <span id="bottom-span">{bottom}</span>
            </div>

        </main>
    )
}