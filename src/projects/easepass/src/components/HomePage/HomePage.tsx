import Button1 from '../Button1/Button1';
import styles from './HomePage.module.scss';

export default function HomePage(){
    return (
        <div className={styles.homepage}>
            <img src='./assets/icon.png' className={styles.icon}/>
            <div className={styles.headline}>Ease Pass</div>
            <div className={styles.subheadline}>A simple, but powerful open source password manager</div>
            <div className={styles.buttons}>
                <Button1 text='Download' accent={true} href="https://apps.microsoft.com/store/detail/ease-pass/9NQPF80923F5?hl=en-us&gl=us&ocid=pdpshare"/>
                <Button1 text='Github' href='https://www.github.com/FrozenAssassine/easepass'/>
            </div>
            <img className={styles.image} src="./assets/img8.png"/>
        </div>
    );
}