import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import { Logo } from './components/Logo/Logo';

const App = () => {
  return (

    <Router>
      <div>
        <Logo />
        <Navigation />

        <hr />

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// https://devashishpathak.com.np/
