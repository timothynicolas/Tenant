import styles from './Start.module.css';

function Start(){

    const mema = {
        color: "red"
    }
    return(
        <div className={`${styles.mainContainer} container`}>
            <p className={styles.header}>Find a place</p>   
            
            <div className="row container">
                <div className="col-4">
                    <p><i class="fa-solid fa-location-dot"></i> Location</p>
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option disabled selected>Select your location</option>
                            <option value="1">Manila</option>
                            <option value="1">Pasig</option>
                            <option value="1">Pasay</option>
                            <option value="1">Navotas</option>
                            <option value="1">Valenzuela</option>
                            <option value="1">Quezon</option>
                            <option value="1">Caloocan</option>
                            <option value="1">San Juan</option>
                            <option value="1">Marikina</option>
                        </select>
                    </div>
                </div>

                <div className="col-4">
                    <p><i class="fa-solid fa-user"></i> Occupants</p>
                    <div>
                        <select className={`form-select ${styles.dropdown}`} aria-label="Default select example">
                            <option disabled selected>Select the number of occupants</option>
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                            <option value="1">6 and above</option>

                           
                        </select>
                    </div>
                </div>

                <div className="col-4">
                    <p><i class="fa-solid fa-money-bill"></i> Rent per month</p>
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option disabled selected>Select amount of rent per month</option>
                            <option value="1">₱ 3,000 - ₱ 3,999</option>
                            <option value="1">₱ 4,000 - ₱ 4,999</option>
                            <option value="1">₱ 5,000 - ₱ 5,999</option>
                            <option value="1">₱ 6,000 - ₱ 6,999</option>
                            <option value="1">₱ 7,000 and above</option>
                        </select>
                    </div>
                </div>

               
            </div>
            <button className={`${styles.btn} btn-primary btn`}>Search</button>
        </div>
    )
}

export default Start;