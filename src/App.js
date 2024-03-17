import React from 'react';
import { Navbar } from './components/Navbar';
import Background from './components/Background';
import { Home, About, Projects, Resume, Socials} from './components/pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <Background />
      </div>
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
      <div id="socials" className="section">
        <Socials />
      </div>
    </div>
  );
}

export default App;
