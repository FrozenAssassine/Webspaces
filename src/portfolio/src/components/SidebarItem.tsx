import React, {MouseEvent } from 'react';
import styles from '../styles/SidebarItem.module.scss';
import { Icon } from '@iconify/react';

type Props ={
    icon: string,
    url?: string,
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

function SidebarItem({icon, url, onClick }: Props) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <a className={styles.link} href={url} onClick={handleClick}>
        <Icon className={styles.icon} icon={icon}/>
    </a>
  );
}

export default SidebarItem;