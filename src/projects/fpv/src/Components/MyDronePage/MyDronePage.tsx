import styles from "./MyDronePage.module.scss";
import {  useState } from "react";

export default function MyDronePage() {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
      };

    return (
        <div className={styles.wrapper}>
            <div className="headline textanimation">My Drone</div>
            <img  onMouseEnter={handleHover} onMouseLeave={handleHover} src={isHovered ? './Assets/fpv_drone_labeled.png' : './Assets/fpv_drone.png'} className={styles.droneImage}/>
            {/* {!showImage && <img onClick={showLabeledImage} src="./Assets/fpv_drone.png" className={styles.droneImage} />}
            {showImage && <img src="./Assets/fpv_drone_labeled.png" className={styles.droneImage} />} */}

        </div>
    );
}
