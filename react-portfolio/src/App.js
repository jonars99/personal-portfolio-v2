import React from 'react';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Projects />
      <About />
    </React.Fragment>
  );
}

export default App;
