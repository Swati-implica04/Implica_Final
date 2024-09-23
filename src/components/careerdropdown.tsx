import React from "react";
import { Nav } from "react-bootstrap";
import "./dropdown.css"
const CareerDropdown: React.FC = () => {
  return (
    <div className="career-section">
      <p className="Career">Career</p>
      <div className="career-content">
        <div className="dropdown-section">
          <p className="head">Career Programs</p>
          <Nav.Link href="#gip">Global Internship Program (GIP)</Nav.Link>
          <Nav.Link href="#ged">Global Expansion Division (GED)</Nav.Link>
          <Nav.Link href="#ghp">Graduate Hiring Program (GHP)</Nav.Link>
        </div>
        <div className="dropdown-section">
          <p className="head">Human Resource</p>
          <Nav.Link href="#positions">Open Positions</Nav.Link>
          <Nav.Link href="#life">Life at IGC</Nav.Link>
          <Nav.Link href="#partners">Academic Partners</Nav.Link>
          <Nav.Link href="#waitlist">Join the Waitlist</Nav.Link>
        </div>
        <div className="featured-section">
        <p className="fss">Featured</p>
          <div className="featured-items">
            <div className="featured-item">
              <div className="imag"></div>
              <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="featured-item">
              <div className="imag"></div>
              <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDropdown;