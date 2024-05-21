import style from './Steps.module.css'

export default function Steps(){
    return(
        
        <div className={`container my-5 ${style.mainContainer}`}>
            <div className={style.textContainer}>
                <p>Rent a place now</p>
                <h1 className={style.headerText}>Quick & Easy Rentals</h1>
            </div>

            <div className={`row mt-5 ${style.iconsContainer}`}>
                <div className='container col-4'>
                    <i class="fa-solid fa-arrow-pointer fa-5x my-5" style={{"color": "#3c00a0"}}></i>
                    <h4>Choose a Location</h4>
                    <p>Select your preferred location</p>
                </div>
                <div className='container col-4'>
                    <i className="fa-solid fa-magnifying-glass-location fa-5x my-5" style={{"color": "#3c00a0"}}></i>
                    <h4>View Listings</h4>
                    <p>Browse through available rentals</p>
                </div>
                <div className='container col-4'>
                    <i class="fa-solid fa-comments fa-5x my-5" style={{"color": "#3c00a0"}}></i>
                    <h4>Connect with Landlords</h4>
                    <p>Get in touch with property owners directly</p>
                </div>
                
            </div>
        </div>
        
        
    )
}

