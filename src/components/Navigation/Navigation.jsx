
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li className='navitem'>
          <Link to="/Home">Home</Link>
        </li>
        <li className='navitem'>
          <Link to="/Services">Services</Link>
        </li>
        <li className='navitem'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
