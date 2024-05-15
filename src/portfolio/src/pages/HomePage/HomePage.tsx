import React from 'react';
import styles from './HomePage.module.scss';

function Homepage() {
  return (
    <div className={styles.homepage}>
        <a href="/invisiblecharacter" className={styles.invisiblecharacter}></a>
        <div className={`${styles.homepageheadline} textanimation`}>JULIUS</div>
        <div className={`${styles.homepageheadline} textanimation`}>KIRSCH</div>
        <div className={styles.subheadline}>An experienced <a href="/programmerdefinition" className={styles.invisibleHref}>programmer</a> interested in many directions of technology</div>
        <a className={styles.iconwrapper} href="./time"><img className={styles.icon} src='./assets/frozenassassineIcon.png'/></a>
    </div>
  );
}

export default Homepage;