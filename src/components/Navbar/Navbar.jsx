import styles from './Navbar.module.css';

function Navbar(){
    return(
        <div className={`${styles.navbar} container mt-3`}>
           <div className={styles.logo}>
                <p>Tenant</p>
           </div>
        
            <div className={styles.navigation}>
                <p className={styles.navbarButton}>Home</p>
                <p className={styles.navbarButton}>Start</p>
                <p className={styles.navbarButton}>About</p>
                <p className={styles.navbarButton}>Contact Us</p>
            </div>

            <div>
                
                <button className={styles.signIn}>Sign In</button>
                <button className={styles.register}>Register</button>
            </div>
        </div>
    )
}

export default Navbar;