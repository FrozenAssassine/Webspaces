import styles from './BlogText.module.scss';

type Props = {
    text: string,
    margin?: string,
}

export default function BlogText(props: Props) {
    return <div style={{margin: props.margin}} className={styles.blogtext}>{props.text}</div>
}