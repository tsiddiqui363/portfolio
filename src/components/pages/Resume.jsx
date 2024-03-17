import React from 'react';
import resume from '../../assets/images/resume.jpg'; // Make sure the path is correct
import resumePDF from '../../assets/Resume.pdf'; // Make sure the path is correct
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div id="resume" className={styles.section}>
      <h1 className={styles.resumeTitle}>My Resume</h1>
      <div className={styles.resumeContent}>
        <img src={resume} alt="Resume" className={styles.resumeImage} />
        <a href={resumePDF} download="Tanaya_Siddiqui_Resume.pdf" className={styles.downloadLink}>
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
