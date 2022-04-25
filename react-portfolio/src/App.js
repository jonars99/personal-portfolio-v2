import React from 'react';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <div className="cursor-trail">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default App;
