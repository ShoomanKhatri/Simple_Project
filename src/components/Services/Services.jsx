import React from 'react';
import './Services.css';

const Services = () => {
    const servicesList = [
        { id: 1, title: 'Web Development', description: 'Building modern and responsive websites.' },
        { id: 2, title: 'Graphic Design', description: 'Creating visually appealing graphics and illustrations.' },
        { id: 3, title: 'Digital Marketing', description: 'Promoting products or services through digital channels.' },
        // Add more services as needed
    ];

    return (
        <div className='service-container' >
            <h2>Our Services</h2>
            <ul >
                {servicesList.map((service) => (
                    <li key={service.id}>
                        <h3>{service.title}</h3>
                        <p className='service-desc'>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
