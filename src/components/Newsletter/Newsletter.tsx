import React from 'react';
import styles from './Newsletter.module.css';
import { Reveal } from '../ui/Reveal/Reveal';

export const Newsletter: React.FC = () => {
  return (
    <section className={styles.sectionNewsletter} id="newsletter">
      <div className="container">
        <Reveal>
          <div className={styles.card}>
            <div className={styles.info}>
              <h2 className={styles.title}>Join the newsletter</h2>
              <p className={styles.desc}>Get the latest insights and updates straight to your inbox.</p>
            </div>
            <div className={styles.formContainer}>
              <form
                className={styles.form}
                action="https://substack.com/@aniketpotabatti"
                method="post"
                target="_blank"
                rel="noopener noreferrer"
              >
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="Type your email..."
                  required
                />
                <button type="submit" className={styles.btn}>
                  Subscribe
                </button>
              </form>
              <p className={styles.terms}>
                By subscribing you agree to Substack's{' '}
                <a href="https://substack.com/tos" target="_blank" rel="noopener noreferrer">
                  Terms of Use
                </a>
                ,{' '}
                <a href="https://substack.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href="https://substack.com/ccpa#personal-data-collected"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Information collection notice
                </a>
              </p>
              <div className={styles.brand}>
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.substackLogo}
                >
                  <svg
                    viewBox="0 0 80 80"
                    className={styles.substackSvg}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#808080" d="M12 12h56v9H12zm0 17.5h56v38.5L40 54.6 12 68z" />
                  </svg>
                  <span>substack</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
