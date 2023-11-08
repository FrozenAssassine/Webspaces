import React, {useEffect} from 'react';
import styles from './ImageModal.module.scss';

interface ImageModalProps {
  selectedImage: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    

  return (
    <div className={styles.imageModal}>
      <span className={styles.closebutton} onClick={onClose}>
        &times;
      </span>
      <img className={styles.image} src={selectedImage} alt="Selected" />
    </div>
  );
};

export default ImageModal;