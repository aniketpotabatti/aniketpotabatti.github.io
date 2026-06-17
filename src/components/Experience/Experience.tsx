import React from 'react';
import styles from './Experience.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { experience } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <Section
      id="experience"
      num="02"
      label="Experience"
      title="My Journey"
    >
      <div className={styles.timeline}>
        {experience.map((item, index) => (
          <Reveal key={index} delay={index + 1}>
            <div className={styles.item}>
              <div className={styles.marker} />
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.org}>{item.organization}</p>
                <p className={styles.desc}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
