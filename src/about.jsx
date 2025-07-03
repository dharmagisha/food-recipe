import React from 'react';
import { images } from './assets/asset'; // Assuming this is exported properly
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-center ">About</h1>

      <div className="about-section">
        <div className="about-image">
          <img src={images.Cook} alt="Cooking Illustration" />
        </div>
        <div className="about-text">
          <p>
            Welcome to <strong>Indian Food</strong> – your one-stop destination for exploring the rich and diverse
            flavors of India! <br /><br />
            At Indian Food, we’re passionate about bringing the magic of Indian cooking into your home.
            Our goal is to preserve India’s culinary heritage and inspire a new generation of home chefs across the globe.
            We believe that cooking should be simple, soulful, and shared with love.
          </p>

          <p className="contact-info">
            <strong>📧 Email:</strong> hello@indianfood.com <br />
            <strong>📷 Instagram:</strong> @indianfood.recipes <br />
            <strong>📌 Facebook:</strong> fb.com/indianfood.recipes
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default About;
