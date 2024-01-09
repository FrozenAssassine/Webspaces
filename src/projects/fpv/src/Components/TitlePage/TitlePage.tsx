import styles from "./TitlePage.module.scss";
import sample from './sample.mp4';

export default function TitlePage() {
    return (
        <div className={styles.titlePage}>
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            <div className={styles.titleImageContainer}>
                <img src="./Assets/titleImage.jpg" className={styles.titleImage} />
            </div>
            <div className={styles.texts}>
                <div className={`${styles.headline} textanimation`}>FPV DRONE</div>
                <div className={styles.subheadline}>Beyond the Horizon</div>
                
                <a href="./" className={styles.droneImageLink}>
                    <img src='./Assets/fpv_drone.png' className={styles.droneImage}/>
                </a>
            </div>
        </div>
    );
}
