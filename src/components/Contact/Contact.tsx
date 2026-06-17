import React from 'react';
import styles from './Contact.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { siteConfig } from '../../data/siteConfig';
import { socials } from '../../data/socials';

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

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      num="06"
      label="Contact"
      title="Let's Work Together"
    >
      <div className={styles.content}>
        <Reveal delay={1}>
          <p className={styles.text}>
            Have a project in mind, or just want to say hello? I'm always open to
            new opportunities and conversations. Drop me a line!
          </p>
        </Reveal>
        <Reveal delay={2}>
          <a
            href={`mailto:${siteConfig.email}`}
            className={styles.email}
          >
            {siteConfig.email}
          </a>
        </Reveal>
        <Reveal delay={3}>
          <div className={styles.socials}>
            {socials.map((link, index) => {
              const linkCls = getLinkClass(link.url);
              return (
                <a
                  key={index}
                  href={link.url}
                  className={`${styles.socialLink} ${linkCls}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
