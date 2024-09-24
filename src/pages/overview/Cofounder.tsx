import React from 'react';
import './CoreFounders.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import image1 from "../../assets/images/IMG_0035-PL Legitymacja szkolna-35x45 mm.jpg";
import styled from 'styled-components';
import img from "../../assets/images/team-2.jpeg"
import img2 from "../../assets/images/ceo/IMG_0681.jpg"
const CoreFounders = () => {
    const teamMembers = new Array(18).fill(null); // Placeholder for 16 team members
  return (
    <div className="core-founders-container">
      <h1 className="core-title">Our Leadership</h1>
      <div className="founder-card">
      <Image src={img2} alt="Description of image 1" />



        {/* <div className="founder-image-placeholder"></div> */}
        <div className="founder-details">
          <h4>FOUNDER & CEO</h4>
          <h2>Sarved Dhar Badgayan</h2>
          <p className="founder-quote">
            In a world of possibilities, we don’t follow trends; we set them. Our drive for innovation and excellence pushes us to conquer markets, disrupt industries, and lead globally. We’re not just part of the future; we’re shaping it.
            {/* "We are an organization led by a purpose: to make a positive, sustainable, and impact that matters to everyone Implica Choice. 'Everyone is an Entrepreneur, and their preneur is themselves.'" */}
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" className="icon-link">
              <FaLinkedin />
            </a>
            <a href="Sarved.badgayan@implicaglobal.com" className="icon-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="founder-card">
        <div className="founder-details">
          <h4>Operational director (Knocksy) Strategic Alliance & Partnership  Dividion</h4>
          <h2>Francesco Congiu</h2>
          {/* <p className="founder-quote">
            "We are an organization led by a purpose: to make a positive, sustainable, and impact that matters to everyone Implica Choice. 'Everyone is an Entrepreneur, and their preneur is themselves.'"
          </p> */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/francesco-congiu/" className="icon-link">
              <FaLinkedin />
            </a>
            <a href="francesco.congiu@implicaglobal.com" className="icon-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
        {/* <div className="founder-image-placeholder"> */}
        <Image src={image1} alt="Description of image 1" />
        {/* </div> */}
      </div>
      <div className="founder-card">
      <Image src={img} alt="Description of image 1" />

        {/* <div className="founder-image-placeholder"></div> */}
        <div className="founder-details">
        <h4>Vice President- Technology</h4>
          <h2>Sebastian Opocensky</h2>
          {/* <p className="founder-quote">
            "We are an organization led by a purpose: to make a positive, sustainable, and impact that matters to everyone Implica Choice. 'Everyone is an Entrepreneur, and their preneur is themselves.'"
          </p> */}
          <div className="social-icons">
            <a href="https://linkedin.com" className="icon-link">
              <FaLinkedin />
            </a>
            <a href="ceo.office@implicaglobalcorp.com" className="icon-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <div className="team-section-container">
      <h2 className="team-title">Our team</h2>
      <div className="team-gri">
        {teamMembers.map((_, index) => (
          <div key={index} className="team-member-placeholder"></div>
        ))}
      </div>
      <p className="team-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    </div>
  );
};

export default CoreFounders;

const Image = styled.img`
      max-width: 432px; 
    max-height: 575px;
  margin-bottom: 20px; /* Add space between images */
`;
