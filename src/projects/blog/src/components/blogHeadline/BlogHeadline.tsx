import styles from './BlogHeadline.module.scss';

type Props = {
    text: String
}

export default function BlogHeadline(props: Props) {
    return <div className={styles.blogheadline}>{props.text}</div>
}