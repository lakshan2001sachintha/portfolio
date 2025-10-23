import React from 'react';
import Role from "./components/Role";
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen font-inter">
     
      <div className="max-w-5xl w-11/12 mx-auto mb-20">
        <NavBar />
        <Role />
        <About />
		<About />
		<About />
    <About />
      </div>
    </div>
  );
}

export default App;
