import React from 'react';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div id="home" className="section">
      <h1>Home</h1>
      {/* If you want to have a link or button to scroll to another section from home */}
      <Link to="about" smooth={true} duration={500}>Go to About</Link>
    </div>
  );
};

export default Home;
