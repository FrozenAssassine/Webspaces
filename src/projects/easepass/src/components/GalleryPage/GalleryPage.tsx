import { ImageGrid } from "../ImageGrid/ImageGrid";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./GalleryPage.module.scss";
import React, { useState, useEffect  } from 'react';

const images = [
    '/assets/image1.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
    '/assets/image5.png',
    '/assets/image8.png',
    '/assets/image9.png',
    '/assets/image10.png',
    '/assets/image11.png',
    '/assets/image12.png',
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
