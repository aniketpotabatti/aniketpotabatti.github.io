import React from 'react';
import styles from './ProgressBar.module.css';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ProgressBar: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className={styles.progressBar}
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
};
