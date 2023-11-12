import styles from "../styles/Glitcheffect.module.scss";

export default function InvisibleCharacter() {

    function copy(){
        const elm = document.createElement("textarea");
        elm.value = "‎";
        document.body.appendChild(elm);
        elm.select();
        document.execCommand('copy');
        document.body.removeChild(elm);
    }
    return (
        <div className={styles.wrapper} onClick={copy}>
            <div className={styles.infotext}>Click anywhere to copy</div>
            <div className={`${styles.mainText} ${styles.glitch}`}>
                <span aria-hidden="true">404</span>
                404
                <span aria-hidden="true">404</span>
            </div>
            <div className={`${styles.subText} ${styles.glitch}`}>
                <span aria-hidden="true">
                    Character
                    <br />
                    not found
                </span>
                Character
                <br />
                not found
                <span aria-hidden="true">
                    Character
                    <br />
                    not found
                </span>
            </div>
        </div>
    );
}
