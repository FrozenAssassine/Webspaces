import ImageGalleryItem from "../../Components/ImageGalleryItem/ImageGalleryItem";
import styles from "./GalleryPage.module.scss";

export default function GalleryPage() {
    return (
        <div className={styles.galleryPage}>
            <div className={styles.headline}>Topics</div>
            <div className={styles.destinations}>
                <ImageGalleryItem headline="Norway" image="./images/test1.png" allImages={[""]}/>
                <ImageGalleryItem headline="Berlin" image="./images/test2.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Neuschwanstein Castle" image="./images/test3.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Marburg" image="./images/test4.jpg" allImages={[""]}/>
            </div>
        </div>
    );
}
