import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Resume = () => {
  return (
    <div id="resume" className="section"> {/* Ensure this id matches the one used in your Navbar */}
      <h1>Resume</h1>
      <p>This is the Resume page. You can view and download my resume here.</p>
      {/* Replace the react-router-dom Link with react-scroll Link */}
      <Link to="home" smooth={true} duration={500}>Back to Home</Link>
      {/* You can also include a download link for your resume here */}
      {/* <a href="/path_to_resume.pdf" download="My_Resume.pdf">Download Resume</a> */}
    </div>
  );
};

export default Resume;

