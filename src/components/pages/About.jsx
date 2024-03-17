import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const About = () => {
  return (
    <div id="about" className="section"> {/* Ensure this id matches the one used in your Navbar */}
      <h1>About</h1>
      <p>This is the About page. Learn more about me and my work here.</p>
      {/* Replace the react-router-dom Link with react-scroll Link */}
      <Link to="home" smooth={true} duration={500}>Back to Home</Link>
    </div>
  );
};

export default About;
