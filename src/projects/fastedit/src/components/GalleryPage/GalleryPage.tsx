import { ImageGrid } from "../ImageGrid/ImageGrid";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./GalleryPage.module.scss";
import React, { useState, useEffect  } from 'react';

const images = [
    '/assets/screen1.png',
    '/assets/screen2.png',
    '/assets/screen3.png',
    '/assets/screen4.png',
    '/assets/screen5.png',
    '/assets/screen6.png',
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
            <div className={`${styles.headline} textanimation`}>Gallery</div>
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
