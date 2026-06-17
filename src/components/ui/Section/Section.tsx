import type { FC, ReactNode } from 'react';
import styles from './Section.module.css';
import { Reveal } from '../Reveal/Reveal';

interface SectionProps {
  id: string;
  num: string;
  label: string;
  title: string | ReactNode;
  variant?: 'default' | 'alt' | 'dark';
  className?: string;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({
  id,
  num,
  label,
  title,
  variant = 'default',
  className = '',
  children,
}) => {
  const getVariantClass = () => {
    if (variant === 'dark') return styles.sectionDark;
    if (variant === 'alt') return styles.sectionAlt;
    return '';
  };

  return (
    <section id={id} className={`${styles.section} ${getVariantClass()} ${className}`.trim()}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>
              <span className={styles.num}>{num}</span> {label}
            </p>
            {typeof title === 'string' ? (
              <h2 className={styles.title}>
                {title.split(/<br\s*\/?>/i).map((line, index, arr) => (
                  <span key={index}>
                    {line}
                    {index < arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            ) : (
              <h2 className={styles.title}>{title}</h2>
            )}
            <div className={styles.divider}></div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
};
