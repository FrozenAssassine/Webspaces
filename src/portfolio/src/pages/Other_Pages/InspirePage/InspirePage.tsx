import styles from "./InspirePage.module.scss";

export default function InspirePage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <p>{"try{"}</p>
                <p className={styles.indent_red}>
                    {"your best"}
                    <span className={styles.text_white}>;</span>
                </p>
                <p>
                    {"} catch("}
                    <span className={styles.text_red}>Yourself</span>
                    {"){"}
                </p>
                <p className={styles.indent_red}>
                    {"everytime you fall"}
                    <span className={styles.text_white}>;</span>
                </p>
                <p>{"}"}</p>
            </div>
        </div>
    );
}
