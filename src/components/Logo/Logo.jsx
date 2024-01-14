import React from 'react';
import './Logo.css';
import logo from '../../assets/logo.jpg';

export const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo" className='img_logo' />
        </div>
    )
}

