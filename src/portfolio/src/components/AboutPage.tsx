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
        <div className={styles.donateview}>
				<div className={styles.donatetext}>Support my work</div>
				<a
					className={styles.donatebutton}
					href="https://www.paypal.com/donate?business=julius@frozenassassine.de&no_recurring=0&item_name=Support+FrozenAssassines+Work&currency_code=EUR"
				>
					Donate
				</a>
			</div>
    </div>
  );
}

export default AboutPage;