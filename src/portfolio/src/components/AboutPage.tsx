import React from 'react';
import styles from '../styles/AboutPage.module.scss';
import AboutItem from './AboutItem';

function AboutPage() {
  return (
    <div className={styles.aboutpage}>
        <div className={styles.aboutitems}>
            <AboutItem headline='Aka' text='FrozenAssassine'/>
            <AboutItem headline='Residence' text='Germany'/>
            <AboutItem headline='Best IDE' text='VSCode'/>
            <AboutItem headline='Best Language' text='C#'/>
            <AboutItem headline='Best Framework' text='React'/>
        </div>
    </div>
  );
}

export default AboutPage;