import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p className="heading">Reach out to us on our social media profiles:</p>
            <div className="social-links">
                <a href="https://www.facebook.com/Alam909"><i className="fa-brands fa-facebook-f fa-2xl" style={{ color: '#316FF6' }}></i></a>
                <a href="https://www.instagram.com/your-instagram-page"><i className="fa-brands fa-instagram fa-2xl" style={{ color: '#f2075a' }}></i></a>
                <a href="https://www.twitter.com/your-twitter-page"><i className="fa-brands fa-twitter fa-2xl" style={{ color: 'blue' }}></i></a>
                <a href="https://www.linkedin.com/your-linkedin-page"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#255ab6' }}></i></a>
                {/* Add more social media links as needed */}
            </div>
            <br /><br />
            <p>
                <h3 className="social-links">Phone No: + 977 9867452183</h3>
            </p>
        </div>
    );
};

export default Contact;
