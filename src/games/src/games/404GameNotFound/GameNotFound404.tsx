import styles from './GameNotFound404.module.scss'

export default function GameNotFound404() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.mainText} ${styles.glitch}`}>
                <span aria-hidden="true">404</span>
                404
                <span aria-hidden="true">404</span>
            </div>
            <div className={`${styles.subText} ${styles.glitch}`}>
                <span aria-hidden="true">
                    Game not found
                </span>Game not found
                <span aria-hidden="true">
                    Game not found
                </span>
            </div>
        </div>
    );
}