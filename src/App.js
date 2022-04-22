import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Contact />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
