import React from 'react';
import styles from './Footer.module.css';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          © 2026 {siteConfig.name}. Crafted with care.
        </p>
        <button
          className={styles.backTop}
          onClick={scrollToTop}
          id="back-to-top"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};
