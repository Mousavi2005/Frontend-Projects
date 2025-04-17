export default function mobileBottomComponent(props) {

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleInfo() {
        // props.add()
        const name = document.querySelector('#nameInput').value
        const email = document.querySelector('#nameInput').value
        const phone = document.querySelector('#nameInput').value
        if (name == '') {
            alert("Please enter your name")
        }
        if (!isValidEmail(email)) {
            alert("Please enter valid email")
        }
        console.log(name)
        console.log(isValidEmail(email))
    }


    return (
        <>

            {props.step == 1 && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-end items-center px-3">
                <button onClick={handleInfo} className="w-[120px] h-[50px] bg-blue-800 text-white rounded text-lg">Next Step</button>
            </div>

            </div>)}


            {(props.step == 2 || props.step == 3 || props.step == 4) && 
            
            (<div className="w-full h-full flex items-end flex-grow-0">

            <div className="bg-white w-full h-24 flex justify-between items-center px-3">
                <button onClick={props.minus}>Go Back</button>
                <button onClick={props.add} className="w-[120px] h-[50px] bg-blue-800 text-white rounded text-lg">{props.step == 4 ? 'Confirm' : 'Next Step'}</button>
            </div>

            </div>)}           
        
        </>

    )
}