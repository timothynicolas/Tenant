import styles from './Hero.module.css';
import image from '../../../public/heroimg.svg';

function Hero(){
    return(
        <div className={` ${styles.mainContainer} container`}>
            <div className="container ">
                <div className="row">
                    <div className="col-6" >
                        <p className={styles.heroText1}>Rent a place now</p>
                        <p className={styles.heroText2}>Moving out made <span className={styles.effortless}>effortless</span></p>
                        <p className={styles.heroText3}>Discover your next home. Find the Perfect Rental. Endless Options, Seamless Connections.</p>
                        <p></p>
                        <button className={styles.start}>Start <i class={` ${styles.startIcon} fa-solid fa-play`}></i> </button>
                        <button className={styles.learnMore}>Learn more</button>
                    </div>
                    <div className={`${styles.heroImageContainer} col-6`}>
                        <img className={styles.heroImage} src={image}></img>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Hero;