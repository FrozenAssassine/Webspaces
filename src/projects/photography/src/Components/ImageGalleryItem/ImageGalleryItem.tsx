import styles from './ImageGalleryItem.module.scss';

type Props = {
    image: string,
    headline: string,
    allImages: string[],
}

export default function ImageGalleryItem(props: Props){
    return (
        <div className={styles.imageGalleryItem}>
            <img className={styles.imageItem} src={props.image}/>
            <div className={styles.headline}>{props.headline}</div>
        </div>
    )
}