import React from 'react';
import styles from '../styles/HomePage.module.scss';

function Homepage() {
  return (
    <div className={styles.homepage}>
        <a href="/invisiblecharacter" className={styles.invisiblecharacter}></a>
        <div className={`${styles.homepageheadline} textanimation`}>JULIUS</div>
        <div className={`${styles.homepageheadline} textanimation`}>KIRSCH</div>
        <div className={styles.subheadline}>An experienced <a href="/programmerdefinition" className={styles.invisibleHref}>programmer</a> interested in many directions of technology</div>
        <img className={styles.icon} src='./assets/frozenassassineIcon.png'/>
    </div>
  );
}

export default Homepage;