import React from 'react';
import { Link } from 'react-scroll';
import styles from './Home.module.css';
import profilePic from '../../assets/images/profilePic.jpg'; // Adjust the import path as needed

export const Home = () => {
  return (
    <div id="home" className={styles.homeSection}>
      <div className={styles.profilePicContainer}>
        <img src={profilePic} alt="Tanaya Siddiqui" className={styles.profilePic} />
      </div>
      <div className={styles.contentBox}>
        <h1>Tanaya Siddiqui</h1>
        <h2>Front-end Developer</h2>
        <p>Passionate in web development and enthusiastic about game development, possessing skills in Python, C, JavaScript, HTML, CSS, and React. Continuously expanding knowledge in C++ and Unreal Engine to create immersive gaming experiences.</p>
        <Link to="about" className={styles.aboutLink} smooth={true} duration={500}>Go to About</Link>
      </div>
    </div>
  );
};

export default Home;
