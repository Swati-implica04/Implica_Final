import React from "react";
import "./HeroSection.css";
import backgroundImage from "../assets/images/tagLine.jpg";
import logoImplica from "../assets/images/newlogo with short size.png";

const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lay"></div> {/* This is the overlay element */}
      <div className="banner-content">
        <img src={logoImplica} alt="Implica Logo" className="logo-image" />
        empowers companies to{" "}
        <span className="str">
          build, maintain, and operate technology
        </span>{" "}
        on a global scale, driving transformation through innovation and
        ensuring smooth international transitions.
      </div>
    </div>
  );
};

export default Banner;
