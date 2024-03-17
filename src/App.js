import React from 'react';
import { Navbar } from './components/Navbar';
import Background from './components/Background';
import { Home, About, Projects, Resume, ContactMe } from './components/pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="resume" className="section">
        <Resume />
      </div>
      <div id="contact" className="section">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
