import { ImageGrid } from "../ImageGrid/ImageGrid";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./GalleryPage.module.scss";
import React, { useState, useEffect  } from 'react';

const images = [
    '/assets/img1.png',
    '/assets/img2.png',
    '/assets/img3.png',
    '/assets/img4.png',
    '/assets/img5.png',
    '/assets/img6.png',
];

export default function GalleryPage() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const handleScroll = (scroll: boolean) => {
        document.body.style.overflowY = scroll ? "unset" : "hidden" ;
    };

    const handleImageClick = (index: number) => {
      setSelectedImageIndex(index);
      handleScroll(false);
    }
  
    const closeModal = () => {
      setSelectedImageIndex(null);
      handleScroll(true);
    };

    return (
        <div className={styles.gallerypage}>
            <div className={styles.headline}>Gallery</div>
            <ImageGrid images={images} onImageClick={handleImageClick} />
            {selectedImageIndex !== null && (
                <ImageModal
                selectedImage={images[selectedImageIndex]}
                onClose={closeModal}
                />
            )}
        </div>
    );
}
