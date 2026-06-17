import React from 'react';
import styles from './Projects.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { projects } from '../../data/projects';

// Utility to match auto-classify domain logic
const getLinkClass = (url: string): string => {
  const domainMap: { [key: string]: string } = {
    'github.com': 'link-github',
    'medium.com': 'link-medium',
    'linkedin.com': 'link-linkedin',
    'x.com': 'link-x',
    'twitter.com': 'link-x',
    'kaggle.com': 'link-kaggle',
  };
  try {
    const host = new URL(url).hostname.toLowerCase();
    for (const [domain, cls] of Object.entries(domainMap)) {
      if (host.includes(domain)) {
        return cls;
      }
    }
  } catch (_) {}
  return '';
};

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      num="04"
      label="Portfolio"
      title="Selected Work"
    >
      <div className={styles.grid}>
        {projects.map((project, index) => {
          const linkCls = getLinkClass(project.url);
          return (
            <Reveal key={project.id} delay={index + 1}>
              <a
                href={project.url}
                className={`${styles.card} ${linkCls}`}
                id={project.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.imageArea}>
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                  <div className={styles.overlay}>
                    <span className={styles.overlayText}>View on GitHub →</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.tech}>
                    {project.tech.map((techItem, techIndex) => (
                      <span key={techIndex}>{techItem}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
