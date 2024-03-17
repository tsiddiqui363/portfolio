import React from 'react';
import styles from './Socials.module.css'; // Ensure the path to your CSS module is correct

export const Socials = () => {
  return (
    <div id="socials" className={styles.section}>
      <div className={styles.contentBox}>
        <h1>Socials</h1>
        <div className={styles.socialLinks}>
          <a href="https://www.github.com/tsiddiqui363" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tanaya-siddiqui-6855a4241/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tanayasiddiqui@gmail.com">
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;

