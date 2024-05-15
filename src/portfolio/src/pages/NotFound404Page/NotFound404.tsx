import styles from './Glitcheffect.module.scss'

export default function NotFound404() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.mainText} ${styles.glitch}`}>
                <span aria-hidden="true">404</span>
                404
                <span aria-hidden="true">404</span>
            </div>
            <div className={`${styles.subText} ${styles.glitch}`}>
                <span aria-hidden="true">
                    Page not found
                </span>Page not found
                <span aria-hidden="true">
                    Page not found
                </span>
            </div>
        </div>
    );
}