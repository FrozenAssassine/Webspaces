import Button1 from '../Button1/Button1';
import styles from './HomePage.module.scss';

export default function HomePage(){
    return (
        <div className={styles.homepage}>
            <img src='./assets/icon.svg' className={styles.icon}/>
            <div  className={`${styles.headline} textanimation`}>QuickNav</div>
            <div className={styles.subheadline}>Simplifying Windows multitasking with a keystroke</div>
            <div className={styles.buttons}>
                <Button1 text='Download' accent={true} href="URL" icon='fluent:store-microsoft-16-filled'/>
                <Button1 text='Github' href='https://www.github.com/FrozenAssassine/quicknav' icon="mdi:github" />
            </div>
            <img className={styles.image} src="./assets/banner.png"/>
        </div>
    );
}