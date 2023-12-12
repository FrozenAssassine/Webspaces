import { Icon } from '@iconify/react';
import styles from '../styles/InterestsItem.module.scss';

type Props = {
    name: string,
    image?: string,
    text: string,
    buttons: { text: string; url: string, icon: string }[],
    children?: React.ReactNode,
}

export default function InterestsItem(props: Props){
    return (
        <div className={styles.interestsitem}>
            <div className={styles.headline}>{props.name}</div>
            {props.image != null && props.image != null  && <img className={styles.image} src={props.image}/>}
            <div className={styles.text}>{props.text}</div>
            { props.children }
            <div className={styles.buttons}>
                {props.buttons.map((value, index) => {
                    return (
                        <a key={index} href={value.url} className={styles.button}>
                            <div>{value.text}</div>
                            <Icon className={styles.icon} icon={value.icon} color="white"/>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}