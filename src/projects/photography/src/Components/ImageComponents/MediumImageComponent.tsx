import styles from './ImageComponent.module.scss';
type Props = {
    image: string,
    headline: string
}
export default function MediumImageComponent(props: Props){
    return (
        <div className={styles.imageGalleryItem}>
            <img className={styles.imageItem} src={props.image}/>
            <div className={styles.headline}>{props.headline}</div>
        </div>
    );
}