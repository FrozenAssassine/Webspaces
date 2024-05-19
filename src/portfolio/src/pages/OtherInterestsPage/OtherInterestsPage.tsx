import styles from './OtherInterestsPage.module.scss';
import InterestsItem from '../../components/InterestsItem/InterestsItem';

export default function OtherInterestsPage(){
    return(
        <div className={styles.otherinterestspage}>
            <InterestsItem 
                name='FPV Drones'
                image='./assets/fpv_drone.jpg'
                text="One of my passions is flying FPV drones. It's an incredible feeling of freedom from the moment you put on your FPV goggles."
                buttons={[
                    { text: "Youtube", url: "https://youtube.com/@DroneVentureFPV", icon: "bi:youtube" },
                    { text: "Instagram", url: "https://instagram.com/droneventurefpv", icon: "bi:instagram" }
                ]}>
                    <div className={styles.droneVideoHeadline}>Videos</div>

                    <div className={styles.dronevideolist}>
                        <a className={styles.dronevideo} href='https://www.youtube.com/watch?v=tSJ3QohvTxg'>
                            <img className={styles.dronevideoimage} src="./assets/droneVideo2.jpg"/>
                        </a>
                        <a className={styles.dronevideo} href='https://www.youtube.com/watch?v=unx09g7cS8M'>
                            <img className={styles.dronevideoimage} src="./assets/droneVideo1.jpg"/>
                        </a>
                    </div>
                </InterestsItem>
        </div>
    );
}