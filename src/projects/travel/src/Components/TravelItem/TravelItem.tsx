import styles from './TravelItem.module.scss';

type Props = {
    headline: string,
    subheadline: string,
    image: string,
}

export default function TravelItem(props: Props){
    return (
        <div className={styles.travelItem}>
            <div className={styles.headline}>{props.headline}</div>
            <div className={styles.subheadline}>{props.subheadline}</div>
                <img src={props.image} className={styles.image}/>
        </div>
    )
}