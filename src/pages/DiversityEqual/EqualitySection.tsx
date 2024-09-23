import React from 'react';
import './EqualitySection.css'; // Import the CSS file
import eqlReq from "../../assets/images/diversity/pexels-edmond-dantes-4344860.jpg";
import eqlpay from "../../assets/images/diversity/pexels-fauxels-3184423.jpg";
import growthPay from "../../assets/images/overview/pexels-olia-danilevich-5313182.jpg";


const EqualitySection = () => {
  return (
    <div className="con">
      {/* Left-Right column section */}
      <div className="left-right-Column">
        <div className="left-column">
          <h1 className="heading">Equality at the Core of Everything We Do</h1>
        </div>
        <div className="right-column">
          <span className="subheading">
            Equality is a non-negotiable principle at Implica Global Corporation. We strive to create a level playing field where everyone can succeed, regardless of their background. This commitment to equality extends to our recruitment processes, career advancement, and compensation structures.
          </span>
        </div>
      </div>

      {/* Middle section with cards */}
      <div className="card-section">
        <div className="card-with-grey-box">
          <div className="card">
            <h2 className="card-heading">1. Equal Pay for Equal Work</h2>
            <span className="card-text">
              We continuously audit and adjust our pay structures to ensure that all employees are compensated fairly, with no disparities based on gender, race, or other personal attributes.
            </span>
          </div>
          <div className="grey-box" style={{ backgroundImage: `url(${eqlpay})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
        </div>

        <div className="card-with-grey-box">
          <div className="grey-box" style={{ backgroundImage: `url(${eqlReq})`, backgroundSize: 'cover', backgroundPosition: 'center' }} > </div>
          <div className="card">
            <h2 className="card-heading">2. Inclusive Recruitment Practices</h2>
            <span className="card-text">
              Our recruitment process ensures that we hire a diverse workforce that reflects the world we serve, eliminating biases in hiring decisions.
            </span>
          </div>
        </div>

        <div className="card-with-grey-box">
          <div className="card">
            <h2 className="card-heading">3. Growth for All</h2>
            <span className="card-text">
              We provide equal opportunities for all employees to advance their careers, offering training and development without discrimination.
            </span>
          </div>
          <div className="grey-box" style={{ backgroundImage: `url(${growthPay})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ></div>
        </div>
      </div>
    </div>
  );
};

export default EqualitySection;
