export default function Main() {
    return (
        <section>
            <img className="main-img" src="./public/mount-fuji.jpg" alt="" />
            
            <div className="text-container">
                <div className="location">
                    <img className="location-icon"  src='./public/location.svg' alt="" />
                    <span className="country">Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D">view on google maps</a>
                </div>

                <div className="detail-text">
                    <h2 className="location-name">Mount Fuji</h2>
                    <span className="date">12 Jan, 2021 - 24 Jan, 2021</span>
                    <p>Mount fuji is the tallest mountain in japan, standing at 3776 meters.
                        Mount fuji is the single most popular tourist site in japan, for both japanese
                        and foreign tourists.
                        </p>
                </div>

            </div>
        </section>
    )
}