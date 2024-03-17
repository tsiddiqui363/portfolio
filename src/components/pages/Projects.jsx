import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Projects = () => {
  return (
    <div id="projects" className="section"> {/* Ensure this id matches the one used in your Navbar */}
      <h1>Projects</h1>
      <p>This is the Projects page. Here you can find a showcase of my work.</p>
      {/* Replace the react-router-dom Link with react-scroll Link */}
      {/* The 'to' prop should match the id of the section you want to scroll to */}
      <Link to="home" smooth={true} duration={500}>Back to Home</Link>
    </div>
  );
};

export default Projects;

