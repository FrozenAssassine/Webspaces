import styles from './FeatureItem.module.scss';

type Props = {
    headline: string,
    content: string
}

export default function FeatureItem(props: Props) {
    return (
        <div className={styles.featureitem}>
            <div className={styles.headline}>{props.headline}</div>
            <div className={styles.content}>{props.content}</div>
        </div>
    );
}