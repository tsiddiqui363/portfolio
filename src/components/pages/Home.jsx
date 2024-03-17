import React from 'react';
import { Link } from 'react-scroll';
import styles from './Home.module.css';
import profilePic from '../images/profilePic.jpg'; // Adjust the import path as needed

export const Home = () => {
  return (
    <div id="home" className={styles.homeSection}>
      <div className={styles.profilePicContainer}>
        <img src={profilePic} alt="Tanaya Siddiqui" className={styles.profilePic} />
      </div>
      <div className={styles.contentBox}>
        <h1>Tanaya Siddiqui</h1>
        <h2>Front-end Developer</h2>
        <p>Developer with a focus on web development and data analysis...</p>
        <Link to="about" className={styles.aboutLink} smooth={true} duration={500}>Go to About</Link>
      </div>
    </div>
  );
};

export default Home;