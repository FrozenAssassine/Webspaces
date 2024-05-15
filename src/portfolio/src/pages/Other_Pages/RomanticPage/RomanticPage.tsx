import styles from './RomanticPage.module.scss';

export default function RomanticPage(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>
                I don't need explicit casting because it is obvious that <br/>you<br/> are my type
            </div>
        </div>
    );
}