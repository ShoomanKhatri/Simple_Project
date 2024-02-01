import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3511fvd', 'template_lrl9gyk', form.current, 'djWA_Pd2FsM8tgWDH')
            .then((result) => {
                console.log(result.text);
                alert('Email Sent !');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="container">
            <h1 className='contact-heading'>Contact Us</h1>


            <div id="contact">
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' required name='user_name' />
                    <input type="email" className="email" placeholder='Your Email' required name='user_email' />
                    <textarea name="message" className='msg' rows="5" placeholder='Your Message' required ></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>

                </form>
            </div>


            <p className="heading">Reach out to us on our social media profiles:</p>
            <div className="social-links">
                <a href="https://www.facebook.com/Alam909"><i className="fa-brands fa-facebook-f fa-2xl" style={{ color: '#316FF6' }}></i></a>
                <a href="https://www.instagram.com/your-instagram-page"><i className="fa-brands fa-instagram fa-2xl" style={{ color: '#f2075a' }}></i></a>
                <a href="https://www.twitter.com/your-twitter-page"><i className="fa-brands fa-x-twitter fa-2xl" style={{ color: 'black' }}></i></a>
                <a href="https://www.linkedin.com/your-linkedin-page"><i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#255ab6' }}></i></a>
                {/* Add more social media links as needed */}
            </div>
            <br /><br />
            <p className='pstyles'></p>
            <h3 className="social-links">Phone No: + 977 9867452183</h3>

        </div>
    );
};

export default Contact;
