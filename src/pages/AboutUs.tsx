import React from 'react';
import './AboutUs.css'; // Import the CSS file
import OurStory from './overview/ourbody';
import Footer from './Footer';
import FactsComponent from './overview/FactComponent';
import map from "../assets/images/world_map_night.jpg";
import styled from 'styled-components';
import implicaLogo from '../assets/images/laptop-with-futuristic-design-screen-glass-sphere-generative-ai_561855-22012-removebg-preview.png';
import img from "../assets/images/overview/pexels-a-darmel-7710083.jpg"
import img2 from "../assets/images/overview/pexels-thirdman-5582871.jpg"
import img7 from "../assets/images/overview/pexels-mikhail-nilov-7681961.jpg"
import img6 from '../assets/images/overview/colleagues-working-together-environment-project.jpg';
import img4 from '../assets/images/overview/businessman-pointing-screen-showing-project-details-colleague.jpg';
import img5 from '../assets/images/overview/pexels-shkrabaanthony-5816299.jpg';
import img3 from '../assets/images/overview/medium-shot-man-holding-device.jpg';
// import img8 from '../assets/images/services/medium-shot-man-holding-device.jpg'; // Add an appropriate image for Sustainability
import img8 from '../assets/images/overview/pexels-n-voitkevich-8062287.jpg';
import im from "../assets/images/diversity/pexels-august-de-richelieu-4427430.jpg"
import logoImplica from "../assets/images/newlogo with short size.png";



const CompanyAd = () => {
  const facts = [
    { id: 1, value: "19", text: "Nationalities represented across the globe" },
    { id: 2, value: "25+", text: "Countries with a global presence" },
    { id: 3, value: "500+", text: " Clients worldwide"},
    { id: 4, value: "6", text: "Global subsidiaries " },
    { id: 5, value: "251", text: "SMEs digitalized under the Global Digital Initiative " },
    { id: 6, value: "92%", text: "Acquisition rate for 300+ B2B clients" },
    { id: 7, value: "58%", text: "Women in our workforce" },
    { id: 8, value: "$2.6M", text: "Spent on Corporate Social Responsibility in 2024" },
  ];
  return (
    <div className="about-page-container">
    <div className="company-ad-container">
    <Image src={im} alt="Description of image 1" />
   
      <h1 className="slogan">
        Where vision meets execution-<span className="highligt">Implica Co.</span>
      </h1>
      <p className="descriptio">
      At Implica Global Corporation, we do more than transform businesses; we empower them to make a difference for their customers and communities.
      </p>
    </div>
    <OurStory/>
    <div className="business-approach-container">
      <div className="approach-section">
        <p className="approach-text">
          We blend strategic innovation with operational excellence, providing the stability that businesses need to thrive amidst constant transformation.
        </p>
      <Image src={img} alt="Description of image 1" />

        {/* <div className="image-placeholder"></div> */}
      </div>

      <div className="approach-section reverse">
        {/* <div className="image-placeholder"></div> */}
        <p className="approach-text">
          At Implica, we believe that true stability comes from being agile, forward-thinking, and ready to embrace new opportunities. Our journey from a small consultancy to a global corporation reflects this ethos. 
          <p>Today, we support over $16.7 billion in combined business valuations across 500+ diverse businesses, from startups and multinational corporations to government entities.</p>
        </p>
      </div>

      <div className="approach-section">
      <Image src={img2} alt="Description of image 1" />

        <p className="approach-text">
          We continue to empower our clients by creating tailored solutions that address their unique challenges, all while upholding the highest global standards.
        </p>
      </div>
    </div>
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${implicaLogo})` }}
    >
      <div className="lay"></div> {/* This is the overlay element */}
      <div className="banner-content">
        {/* <p className="logo"> */}
        <img src={logoImplica} alt="Implica Logo" className="logo-image" />
          s more than a corporation—{" "}
    <p className="banner-content">we are a movement, driving lasting change and helping businesses achieve their full potential in a rapidly evolving world. 
        </p>
      </div>
    </div>
    <FactsComponent
        title="Facts"
        facts={facts}
        backgroundimage={map}
      />
    <div style={{background:'white'}}>
    <div className="features-container">
      <h1>What We Do</h1>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Tech Services</h3>
          <p className='yts'>Empowering organizations with cutting-edge technology solutions that drive efficiency, innovation, and growth.</p>
         <Imag src={img3} alt="Description of image 1" />
        </div>
        <div className="feature-item">
          <h3>Management Consulting</h3>
          <p>Helping businesses optimize their operations, enhance leadership, and achieve operational excellence.</p>
         <Imag src={img4} alt="Description of image 1" />
        </div>
        <div className="feature-item">
          <h3>Strategy Consulting</h3>
          <p>Crafting actionable strategies that align with market dynamics and future business goals.</p>
         <Imag src={img5} alt="Description of image 1" />
        </div>
        <div className="feature-item">
          <h3>Operational Consulting</h3>
          <p>Streamlining processes to improve productivity and reduce costs.</p>
         <Imag src={img8} alt="Description of image 1" />
        </div>
        <div className="feature-item">
          <h3>Marketing Consulting</h3>
          <p>Developing data-driven marketing strategies that resonate with target audiences and drive growth.</p>
         <Imag src={img7} alt="Description of image 1" />
        </div>
        <div className="feature-item">
          <h3>Sustainability & Green</h3>
          <p>Leading the charge towards sustainable practices, ensuring long-term success for our clients and the planet.</p>
         <Imag src={img6} alt="Description of image 1" />
        </div>
      </div>
    </div>
    </div>
    <Footer />

    </div>
  );
};

export default CompanyAd;
const Image = styled.img`
  width: 544px; /* Adjust width as needed */
  height: 436px; /* Maintain aspect ratio */
`;
const Imag= styled.img`
  width: 300px; /* Adjust width as needed */
  height: 300px; /* Maintain aspect ratio */
`;