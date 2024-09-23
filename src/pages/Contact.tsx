import React from 'react';
import './ContactUs.css';
import IGC from './IgcwayContact';
import FORM from './FormDesign';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>What's on your mind?</h1>
        <p>We would love to hear from you</p>

        <div className="service-box-container">
          <div className="service-box">
            <input type="checkbox" />
            <p>Name of Service</p>
          </div>
          <div className="service-box">
            <input type="checkbox" />
            <p>Name of Service</p>
          </div>
          <div className="service-box">
            <input type="checkbox" />
            <p>Name of Service</p>
          </div>
        </div>
      </div>

      {/* Render the IGC Offices section */}
      <IGC />
      <FORM />
    </div>
  );
};

export default Contact;
