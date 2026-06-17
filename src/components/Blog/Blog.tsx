import React from 'react';
import styles from './Blog.module.css';
import { Section } from '../ui/Section/Section';
import { Reveal } from '../ui/Reveal/Reveal';
import { blogPosts } from '../../data/blog';

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

export const Blog: React.FC = () => {
  return (
    <Section
      id="blog"
      num="05"
      label="Writing"
      title="Blog &amp; Articles"
      variant="alt"
    >
      <div className={styles.list}>
        {blogPosts.map((post, index) => {
          const linkCls = getLinkClass(post.url);
          return (
            <Reveal key={index} delay={index + 1}>
              <a
                href={post.url}
                className={`${styles.item} ${linkCls}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.meta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.tag}>{post.tag}</span>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
