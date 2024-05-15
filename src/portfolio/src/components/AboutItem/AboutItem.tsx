import React from 'react';
import styles from './AboutItem.module.scss';

type Props = {
  text: string,
  headline: string
}

function AboutItem({text, headline}: Props) {
  return (
    <div className={styles.aboutitem}>
      <div className={styles.headline}>{headline}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

export default AboutItem;