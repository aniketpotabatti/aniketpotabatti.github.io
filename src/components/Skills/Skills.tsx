import React from 'react';
import styles from './Skills.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { skills } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      num="03"
      label="What I Do"
      title="Skills &amp; Expertise"
      variant="dark"
    >
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <Reveal key={index} delay={index + 1}>
            <div className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <h3 className={styles.title}>{skill.title}</h3>
              <p className={styles.description}>{skill.description}</p>
              <div className={styles.tags}>
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
