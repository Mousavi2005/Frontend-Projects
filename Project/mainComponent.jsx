export default function Main(props) {
    return (
        <section>

            <div className="img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt} />
            </div>
            
            <div className="text-container">
                <div className="location">
                    <img className="location-icon"  src='./public/location.svg' alt="" />
                    <span className="country">Japan</span>
                    <a href= {props.googleMap}>view on google maps</a>
                </div>

                <div className="detail-text">
                    <h2 className="location-name">{props.locationName}</h2>
                    <span className="date">{props.time}</span>
                    <p className="text"> {props.text} </p>
                </div>

            </div>

        </section>
    )
}