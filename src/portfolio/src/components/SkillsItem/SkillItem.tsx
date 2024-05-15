import React from 'react';
import styles from './SkillItem.module.scss'
import { Icon } from '@iconify/react';

type Props = {
  icon: string,
  headline: string,
  infotext: string
}

function SkillItem({ icon, headline, infotext }: Props) {
  return (
    <div className={styles.skillitem}>
        <Icon className={styles.icon} icon={icon} />
        <div className={styles.headline}>{headline}</div>
        <div className={styles.hovertext}>{infotext}</div>
    </div>
  );
}

export default SkillItem;
