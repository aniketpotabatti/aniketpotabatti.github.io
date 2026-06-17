import React from 'react';
import styles from './About.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { Button } from '../ui/Button/Button';
import profileImg from '../../assets/images/profile.jpg';

export const About: React.FC = () => {
  return (
    <Section
      id="about"
      num="01"
      label="About"
      title="Building digital<br />experiences."
      variant="alt"
    >
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.imageWrapper}>
            <img
              src={profileImg}
              alt="Aniket Potabatti"
              className={styles.image}
            />
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal delay={1}>
            <p>
              I'm a passionate developer and data scientist who loves crafting intelligent,
              clean, and visually compelling digital products. With a keen eye for detail
              and a drive for excellence, I bring ideas to life through code and AI.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p>
              Whether it's a sleek GenAI application, a robust backend, or an intuitive
              user interface — I believe great software is both beautiful and purposeful.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className={styles.cta}>
              <Button href="/resume.pdf" download variant="primary">
                ↓ Download Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className={styles.stats}>
              <div>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Years Exp.</div>
              </div>
              <div>
                <div className={styles.statNumber}>∞</div>
                <div className={styles.statLabel}>Curiosity</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
