import TravelItem from '../../Components/TravelItem/TravelItem';
import styles from './HomePage.module.scss';

export default function HomePage(){
    return (
        <div className={styles.homePage}>
            <div className={styles.title}>
                <div className={`${styles.headline} textanimation`}>MY TRAVEL</div>
                <div className={`${styles.headline} textanimation`}>BLOG</div>
            </div>
            <div className={styles.travelItems}>
                <TravelItem image="./Assets/images/norway_sweden2024/image1.JPG" headline={"Denmark Sweden Norway"} subheadline={"A roadtrip from Denmark through western sweden, to norway, through norway and back to sweden, to Öland, and back down through Denmark and with the ferry to germany."}/>
            </div>
        </div>
    )
}