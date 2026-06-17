import React, { useEffect, useState } from 'react';
import styles from './Loader.module.css';
import { siteConfig } from '../../data/siteConfig';

export const Loader: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.loader} ${isHidden ? styles.hidden : ''}`}
      aria-hidden="true"
    >
      <div className={styles.inner}>
        <span className={styles.text}>{siteConfig.logoText}</span>
      </div>
    </div>
  );
};
