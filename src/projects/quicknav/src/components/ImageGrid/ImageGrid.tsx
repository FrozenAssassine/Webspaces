import React from "react";
import styles from "./ImageGrid.module.scss";

type Props = {
    images: string[];
    onImageClick: (index: number) => void;
};

export const ImageGrid = ({ images, onImageClick }: Props) => {
    return (
        <div className={styles.imagegrid}>
            <div className={styles.galleryimages}>
                {images.map((image, index) => (
                    <div className={styles.galleryimage}>
                        <img
                            className={styles.image}
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            onClick={() => onImageClick(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
