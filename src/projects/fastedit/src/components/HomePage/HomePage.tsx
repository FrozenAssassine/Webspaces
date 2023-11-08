import Button1 from '../Button1/Button1';
import styles from './HomePage.module.scss';

export default function HomePage(){
    return (
        <div className={styles.homepage}>
            <img src='./assets/icon.png' className={styles.icon}/>
            <div className={styles.headline}>Fastedit - Texteditor</div>
            <div className={styles.subheadline}>Fastedit is an ultimate text editor app with line numbering, custom designs, session snapshot, line highlighter, and syntax highlighting to improve editing and organizing documents.</div>
            <div className={styles.buttons}>
                <Button1 text='Download' accent={true} href='https://apps.microsoft.com/store/detail/fastedit/9NTQ53W18DPW?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab'/>
                <Button1 text='Github' href='https://www.github.com/FrozenAssassine/Fastedit'/>
            </div>
            <img className={styles.image} src="./assets/image1.png"/>
        </div>
    );
}