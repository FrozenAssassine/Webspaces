import React from 'react';
import styles from '../styles/HomePage.module.scss';

function Homepage() {
  return (
    <div className={styles.homepage}>
        <div className={`${styles.homepageheadline} textanimation`}>JULIUS</div>
        <div className={`${styles.homepageheadline} textanimation`}>KIRSCH</div>
        <div className={styles.subheadline}>An experienced developer interested in many directions of technology</div>
        <img className={styles.icon} src='./assets/frozenassassineIcon.png'/>
    </div>
  );
}

export default Homepage;