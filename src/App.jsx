import React from 'react';
import Role from "./components/Role";
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification';

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 font-inter">
      {/* Main container with responsive padding */}
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Role />
        <About />
        <Skills />
        <Projects />
        <Certification />
      </div>
    </div>
  );
}

export default App;
