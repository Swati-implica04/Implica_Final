import React from "react";
import "./dropdown.css"
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const ServicesDropdown: React.FC = () => {
  return (
    <div className="services-section p-2">
      <h2 style={{ textAlign: "left", paddingLeft: "25px" }}>Services</h2>
      <div className="services-grid">
        <div className="service-item">
        <Nav.Link  as={Link} to="/implica-digital">Implica Digital</Nav.Link>
           <p className="imgText">
            Providing seamless tech services and innovative digital solutions
            for everyday operations.
          </p>
        </div>
        <div className="service-item">
        <Nav.Link  as={Link} to="/implica-ai">Implica A.I.</Nav.Link>
           <p className="imgText">
            Harness the power of artificial intelligence to revolutionize your
            operations.
          </p>
        </div>
        <div className="service-item">
          <h3>Implica Consulting</h3>
           <p className="imgText">
            Comprehensive consulting solutions across management, strategy,
            operations, and marketing to drive sustainable local and global
            business growth and innovation.
          </p>
        </div>
        {/* <div className="service-item">
          <h3>Implica Private</h3>
           <p className="imgText">
            Connecting your vision to unmatched expertise. We help you lead and
            become the global trend, delivering bespoke solutions and value at
            every milestone.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesDropdown;