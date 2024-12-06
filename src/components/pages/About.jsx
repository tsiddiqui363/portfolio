import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import styles from './About.module.css'; // Import the CSS module

const About = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.contentBox}>
        <h1>About Me</h1>
        <p>
          Technology has always been at the core of my ambitions, driving my passion for creating innovative, data-driven solutions. My programming journey began in high school, where I gained a strong foundation in C programming and Python. Since then, I have cultivated my expertise in machine learning, data analysis, and statistical modeling, focusing on using these tools to solve complex problems. Beyond programming, my passion for storytelling and creative problem-solving naturally extends to front-end development, where I combine visuals and interactivity to craft engaging user experiences.
        </p>
        <p>
          Throughout my academic career, I have developed proficiency in Python, JavaScript, React, and machine learning libraries such as Pandas, scikit-learn, and Matplotlib. These experiences have enhanced my skills in data visualization, hypothesis testing, and algorithm development.
        </p>
        <p>
          My professional journey has also allowed me to develop excellent organizational and analytical abilities. As a Cash Room Processor at GardaWorld, I managed sensitive financial data with precision, reinforcing my attention to detail and commitment to accuracy. These skills, combined with my technical expertise, have prepared me to excel in roles that require blending data analysis, programming, and problem-solving.
        </p>
        <p>
          Currently, I am expanding my knowledge in AWS to enhance my understanding of scalable machine learning applications. I am passionate about leveraging data and AI to drive innovation, tackle real-world challenges, and contribute to meaningful projects in the fields of technology and data science.
          </p>

        <Link to="home" smooth={true} duration={500}>Back to Home</Link>
      </div>
    </div>
  );
};

export default About;