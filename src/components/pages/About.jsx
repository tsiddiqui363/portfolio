import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.contentBox}>
        <h1>About Me</h1>
        <p>
          Ever since I can remember, technology has captivated me. As a child, games like Legend of Zelda and Fire Emblem sparked a dream within me—a dream to create immersive, unforgettable experiences just like them. As I grew older, my interests evolved, and I found myself drawn to the world of RPGs and MOBA games. It was during this time that I discovered Unity and Unreal Engine, realizing that these tools could be the gateway to fulfilling my dream of becoming a game developer.
        </p>
        <p>
          My journey into the world of programming began in high school, where I immersed myself in learning C programming and Python. These early experiences laid a solid foundation for my future endeavors and ignited a passion within me that continues to burn brightly.
        </p>
        <p>
          Beyond programming, I've always had a diverse range of interests. From sketching to digital painting, I've always been fascinated by visuals and their ability to evoke emotions and tell stories. This fascination naturally led me to focus on front-end development, where I found a deep sense of fulfillment and engagement.
        </p>
        <p>
          While my academic achievements may not be stellar, my passion for coding is unwavering. When I'm engrossed in coding, time seems to stand still as I become fully immersed in perfecting every aspect of my program. I may not have the highest grades or the most prestigious qualifications, but what I lack in formal credentials, I make up for with dedication, creativity, and a relentless drive to learn and improve. Currently, my focus lies in web development and data analysis.
        </p>
        <p>
          I've honed my skills in Python, C, JavaScript, HTML, CSS, and React, and I'm continuously seeking to expand my knowledge, with ongoing learning in C++ and Unreal Engine. Besides, I am working on machine learning tools such as pandas, scikit-learn, and matplotlib etc. My journey is one of passion, determination, and a deep-seated love for the world of technology—a world that continues to inspire and challenge me every day.
        </p>
        <Link to="home" smooth={true} duration={500}>Back to Home</Link>
      </div>
    </div>
  );
};

export default About;