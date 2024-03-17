import React from 'react';
import { Link } from 'react-scroll';
import styles from './Projects.module.css'; // Make sure to create a Projects.module.css file for styling

const Projects = () => {
  const projectList = [
    {
      name: 'Personal Portfolio',
      description: 'A personal portfolio website to showcase my projects and skills.',
      tools: ['React', 'CSS', 'JavaScript', 'HTML'],
      repoLink: 'https://github.com/tsiddiqui363/portfolio',
    },
    {
      name: 'Hangman Game',
      description: 'A fun and interactive hangman game built with JavaScript.',
      tools: ['JavaScript', 'HTML', 'CSS'],
      repoLink: 'https://github.com/tsiddiqui363/Hangman',
    },
    {
      name: 'POODLE-Attack-Cybersecurity',
      description: 'In-depth analysis of the POODLE attack, with a focus on cybersecurity principles.',
      tools: ['JavaScript', 'Burp Suite', 'Node.js'],
      repoLink: 'https://github.com/yourusername/poodle-attack',
    },
    {
      name: 'Wine Data Analysis',
      description: 'Machine learning project analyzing wine data sets using pandas.',
      tools: ['Jupyter Notebook', 'Pandas', 'scikit-learn', 'Matplotlib'],
      repoLink: 'https://github.com/yourusername/wine-data-analysis',
    },
  
  ];

  return (
    <div id="projects" className={styles.section}>
    <h1 className={styles.projectTitle}>My Projects</h1> {/* Add this line */}
      {projectList.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className={styles.toolsList}>
            {project.tools.map((tool, index) => (
              <span key={index} className={styles.tool}>{tool}</span>
            ))}
          </div>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>View Repository</a>
        </div>
      ))}
      <Link to="home" smooth={true} duration={500}>Back to Home</Link>
    </div>
  );
};

export default Projects;
