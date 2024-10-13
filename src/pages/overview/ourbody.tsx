import React from 'react';
import './OurStory.css'; // Make sure to create and style this CSS file
import image1 from '../../assets/images/overview/pexels-divinetechygirl-1181372.jpg'; // Replace with the actual path to your image
import image2 from '../../assets/images/overview/pexels-kraken-images-3626720-5426376.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const OurStory = () => {
  return (
    <div className="our-story-container">
      <h1 className="our-story-title">Our Story</h1>
      <p className="our-story-intro">
        Implica Global Corporation was born out of a vision to become a dynamic force in the business world, a motion of change and adaptation designed to maintain stability in an ever-evolving landscape. Headquartered in Tallinn, Estonia, and governed by rigorous audit standards in the USA and EU, we have grown into a global powerhouse, helping businesses navigate the complexities of modern markets.
      </p>

      <div className="our-story-images">
      <Link to = {"/commonblog"}> 
      <Image src={image1} alt="Description of image 1" />
      </Link>
      <Image src={image2} alt="Description of image 2" />
      </div>

      <p className="our-story-conclusion">
        From the very beginning, we recognized that the only constant in the business world is change. With this understanding, we’ve made it our mission to not only adapt to change but to lead it. Our progressive approach ensures that our clients are not just prepared for the future;they are shaping it.
      </p>
    </div>
  );
};

export default OurStory;
const Image = styled.img`
  width: 544px; /* Adjust width as needed */
  height: 436px; /* Maintain aspect ratio */
  margin-bottom: 20px; /* Add space between images */
`;