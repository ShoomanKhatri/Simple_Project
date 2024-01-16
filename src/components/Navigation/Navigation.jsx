
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li >
          <Link to="/" className='navitem'>Home</Link>
        </li>
        <li>
          <Link to="/Services" className='navitem'>Our Services</Link>
        </li>
        <li>
          <Link to="/About" className='navitem'>About Us</Link>
        </li>
        <li>
          <Link to="/contact" className='navitem'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
