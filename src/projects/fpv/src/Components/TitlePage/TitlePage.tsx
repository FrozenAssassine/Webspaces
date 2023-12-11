import styles from "./TitlePage.module.scss";

export default function TitlePage() {
    return (
        <div className={styles.titlePage}>
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
