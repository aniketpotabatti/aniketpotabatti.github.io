import React from 'react';
import styles from './Hero.module.css';
import { siteConfig } from '../../data/siteConfig';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';
import { Button } from '../ui/Button/Button';

export const Hero: React.FC = () => {
  const typedText = useTypingAnimation(siteConfig.typingTitles);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const navEl = document.getElementById('nav');
      const offset = (navEl?.offsetHeight || 70) + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.content}`}>
        {siteConfig.availability.active && (
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>{siteConfig.availability.text}</span>
          </div>
        )}

        <p className={styles.greeting}>{siteConfig.greeting}</p>
        <h1 className={styles.name}>{siteConfig.name}</h1>

        <p className={styles.title}>
          <span className={styles.typing}>{typedText}</span>
          <span className={styles.cursorBlink}>|</span>
        </p>

        <div className={styles.ctaGroup}>
          <Button
            href="#projects"
            onClick={(e) => handleCtaClick(e, 'projects')}
            variant="primary"
            id="hero-view-work"
          >
            View Work
          </Button>
          <Button
            href="#contact"
            onClick={(e) => handleCtaClick(e, 'contact')}
            variant="ghost"
            id="hero-contact"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine}></span>
      </div>
    </section>
  );
};
