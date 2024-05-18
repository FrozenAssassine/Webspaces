import styles from './NavigationBar.module.scss';

export default function NavigationBar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.region}>
                Portfolio
            </div>
            <div className={styles.navbarButtons}>
                <div className={styles.navbarButton}>Home</div>
                <div className={styles.navbarButton}>Projects</div>
                <div className={styles.navbarButton}>Divs</div>
                <div className={styles.navbarButton}>Bens</div>
                <div className={styles.navbarButton}>Dings</div>
                <div className={styles.navbarButton}>About</div>
            </div>
        </div>
    )
}