import ImageGalleryItem from "../../Components/ImageGalleryItem/ImageGalleryItem";
import styles from "./GalleryPage.module.scss";

export default function GalleryPage() {
    return (
        <div className={styles.galleryPage}>
            <div className={styles.headline}>Topics</div>
            <div className={styles.destinations}>
                <ImageGalleryItem headline="Norway" image="./images/image1.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Berlin" image="./images/image2.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Neuschwanstein Castle" image="./images/image3.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Lostplace" image="./images/image4.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Lostplace" image="./images/image5.jpg" allImages={[""]}/>
                <ImageGalleryItem headline="Crazy" image="./images/image6.jpg" allImages={[""]}/>
            </div>
        </div>
    );
}
