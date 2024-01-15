import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import { Logo } from './components/Logo/Logo';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

const App = () => {
  return (

    <Router>
      <div>
        <Logo />
        <Navigation />

        <hr />

        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer/>
      </div>
    </Router>

   
  );
};

export default App;

// https://devashishpathak.com.np/
