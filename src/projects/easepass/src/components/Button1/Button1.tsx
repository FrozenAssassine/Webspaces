import styles from './Button1.module.scss';

type Props = {
    text: string,
    accent?: boolean,
    href?: string
}

export default function Button1(props: Props){
    const buttonClassName = `${styles.button} ${props.accent ? styles.accent : ''}`;
    return (
        <a href={props.href} className={buttonClassName}>
            {props.text}
        </a>
    );
}