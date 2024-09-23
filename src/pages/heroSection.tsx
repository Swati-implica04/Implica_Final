import React from "react";
import "./HeroSection.css";
import backgroundImage from "../assets/images/tagLine.jpg";
 
const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lay"></div> {/* This is the overlay element */}
      <div className="banner-content">
        {/* <p className="logo"> */}
          <span className="logo-gradient">implica </span>
        empowers companies to{" "}
          <span className="str">build, maintain, and operate technology</span> on a global scale, driving transformation through innovation and ensuring smooth international transitions.
        {/* </p> */}
      </div>
    </div>
  );
};
 
export default Banner;