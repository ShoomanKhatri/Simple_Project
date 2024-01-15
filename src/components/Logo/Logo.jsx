import React from 'react';
import './Logo.css';
import logo from '../../assets/logo.jpg';
// import logo from 'https://www.freepnglogos.com/uploads/tire-png/car-tire-transparent-png-pictures-icons-and-png-31.png';

export const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" className='img_logo' />
        </div>
    )
}

