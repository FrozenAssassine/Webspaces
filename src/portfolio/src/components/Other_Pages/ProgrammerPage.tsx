import styles from "../../styles/Other_Pages/ProgrammerPage.module.scss";

export default function ProgrammerPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.headline}>PROGRAMMER</div>
                <div className={styles.pronounciation}>{"/pro.gram.er/ (n)"}</div>
                <div className={styles.onewho}>{"1.one who:"}</div>
                <div className={styles.bulletpoint}>
                    <span className={styles.white_text}>{"a)"}</span> solves a problem you don't know had, in a way that
                    you don't understand
                </div>
                <div className={styles.bulletpoint}>
                    <span className={styles.white_text}>{"b)"}</span> has the ability to turn caffeine into code
                </div>
                <div className={styles.seealso}>
                    {"2.see also:"}
                    <span className={styles.orange_text}> magician; wizard</span>
                </div>
            </div>
        </div>
    );
}
