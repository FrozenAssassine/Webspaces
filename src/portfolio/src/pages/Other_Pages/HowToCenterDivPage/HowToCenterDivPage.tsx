import styles from "./HowToCenterDivPage.module.scss";

export default function HowToCenterDivPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.headline}>Attempting to Center My Div Like It Owes Me Money</div>
                <div className={styles.subheadline}>
                    Beneath this text, a div sits perfectly centered, wondering why you can not do the same?😅
                </div>
            </div>
            <div className={styles.centered}>This div is actually centered</div>

            <div className={styles.codeboxes}>
                <div className={styles.codebox}>
                    <div className={styles.codeHeadline}>html</div>
                    <div className={styles.code}>
                        {"<"}
                        <div className={styles.red}>div&nbsp;</div>
                        <div className={styles.green}>class=</div>
                        <div className={styles.yellow}>"center"</div>
                        {">This div is centered</"}
                        <div className={styles.red}>div</div>
                        {">"}
                    </div>
                </div>
                <div className={styles.codebox}>
                    <div className={styles.codeHeadline}>css</div>
                    <div className={styles.codeVertical}>
                        <div>.center {"{"}</div>
                        <div className={styles.inline}>
                            <div className={styles.blue}>&#9;display:&nbsp;</div>
                            <div className={styles.green}>flex;</div>
                        </div>
                        <div className={styles.inline}>
                            <div className={styles.blue}>&#9;align-items:&nbsp;</div>
                            <div className={styles.green}>center;</div>
                        </div>
                        <div className={styles.inline}>
                            <div className={styles.blue}>&#9;justify-content:&nbsp;</div>
                            <div className={styles.green}>center;</div>
                        </div>
                        <div className={styles.inline}>
                            <div className={styles.blue}>&#9;height:&nbsp;</div>
                            <div className={styles.green}>100%;</div>
                        </div>
                        <div className={styles.inline}>
                            <div className={styles.blue}>&#9;width:&nbsp;</div>
                            <div className={styles.green}>100%;</div>
                        </div>
                        {"}"}
                    </div>
                </div>
            </div>
        </div>
    );
}
