import React, { useState, useEffect } from 'react';
import './Home.css';

// Import your images
import image1 from '../../assets/tyre1.jpg';
import image2 from '../../assets/tyre2.jpg';
import image3 from '../../assets/tyre3.jpg';
import image4 from '../../assets/tyre4.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const changeImage = (newImage) => {
    setCurrentImage(newImage);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change image every 3 seconds
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 3000);

    return () => {
      // Cleanup the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures that the effect runs once after the initial render

  return (
    <div className="home-container">
      <h2>Welcome to our Business Website!</h2>
      <p>
        We provide quality products and services to meet your needs. Explore our website to learn more about what we offer.
      </p>
      <div className="image-and-buttons-container">
        <img
          src={
            currentImage === 1
              ? image1
              : currentImage === 2
              ? image2
              : currentImage === 3
              ? image3
              : image4
          }
          alt={`Image ${currentImage}`}
          className="centered-image"
        />
        <div className="image-buttons">
          <button className="change-button" onClick={() => changeImage(currentImage > 1 ? currentImage - 1 : 4)}>
            &lt;
          </button>
          <button className="change-button" onClick={() => changeImage(currentImage < 4 ? currentImage + 1 : 1)}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
